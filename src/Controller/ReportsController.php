<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use MongoDB;

class ReportsController extends AbstractController
{
    /**
     * @Route("/reports/{accountId}", name="app_reports",  defaults={"accountId" = null})
     */
    public function index($accountId): Response
    {
        $mongo_url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
        $client = new MongoDB\Client($mongo_url);
        $db_name = 'demo-db';
        $db = $client->$db_name;
        $collection = $db->Accounts;
        if(is_null($accountId)){
            $matchAccount = ['status' => 'ACTIVE' ];
        }else{
            $matchAccount = ['status' => 'ACTIVE', 'accountId' => $accountId];
        }        

        $accountsjoin = $collection->aggregate([
        [
            '$match' => $matchAccount
        ],
        ['$lookup'=> [
            'from'=> 'Metrics',
            'localField'=> 'accountId',
            'foreignField'=> 'accountId',
            'as'=> 'AccountsMetrics'
        ]],        
        [
            '$project' => [
                'accountName' => 1,
                'accountId' => 1,
                'spend' => 1,
                'clicks' => 1,
                'impressions' => 1,
                'costPerClick' => ['$ifNull' => [ '$costPerClick', 0 ] ],
                'AccountsMetrics' => 1
            ]
        ],
        [
            '$match'=>
            [
                'AccountsMetrics' => ['$ne' => []]
            ]
        ],
        ['$unwind' => '$AccountsMetrics']
        ,
        [
            '$group' => [
               '_id'=> '$accountId',               
               'accountName' => ['$first' => '$accountName'],
               'accountId' => ['$first' => '$accountId'],
               'spend' => ['$sum' => '$AccountsMetrics.spend'],
               'clicks' => ['$sum' => '$AccountsMetrics.clicks'],
               'impressions' => ['$sum' => '$AccountsMetrics.impressions'],
            ]
        ]
        ,
        [
            '$addFields'=> [ "costPerClick"=> [ '$divide'=> [ '$spend', '$clicks' ] ]]
        ]
        ]);
        $docsJoin = $accountsjoin->toArray();
        $data = json_encode($docsJoin);
        $data = json_decode($data);

        return $this->render('reports/index.html.twig', [
            'controller_name' => 'ReportsController',
            'data' => $data,
            'accountId' => $accountId
        ]);
    }
}
