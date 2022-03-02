<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use MongoDB;

class ReportsController extends AbstractController
{
    /**
     * @Route("/reports", name="app_reports")
     */
    public function index(): Response
    {
        // //$query = "db.User.find({}).toArray()";
        // //$client = new MongoClient("mongodb://ravi.d:1234@localhost:27017");
        // //$db = $client->selectDB("Demo");
        // //$result = $db->execute($query);

        // $query = "db.Accounts.find({}).toArray()";
        // $connection = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
        // $client = new MongoDB\Client($connection);
        // //$dbs = $client->listDatabases();
        // $db = $client->selectDatabase("demo-db");
        // //$result = $db->find($query);
        // $userCollection = $db->selectCollection('Accounts');
        // $collecton = $userCollection->find(array('_id' => '1'));
        // $docs = $collecton->toArray();
        // var_dump($docs);

        $mongo_url = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
        $client = new MongoDB\Client($mongo_url);
        $db_name = 'demo-db';
        $db = $client->$db_name;
        $collection = $db->Accounts;

        //$where = array(            
        //    'status' => 'ACTIVE'
        //);
        //$select_fields = array(
        //    'accountId' => 1,
        //    'accountName' => 1,
        //);
        //$options = array(
        //    'projection' => $select_fields
        //);
        //$cursor = $collection->find($where, $options);   //This is the main line
        //$docs = $cursor->toArray();

        //print_r($docs);

        $accountsjoin = $collection->aggregate([['$lookup'=> [
            'from'=> 'Metrics',
            'localField'=> 'accountId',
            'foreignField'=> 'accountId',
            'as'=> 'AccountsMetrics'
          ]]]);
        $docsJoin = $accountsjoin->toArray();
        foreach($docsJoin as $item){
            var_dump(json_encode($item));
        }

        return $this->render('reports/index.html.twig', [
            'controller_name' => 'ReportsController',
        ]);
    }
}
