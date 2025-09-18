
import fs from 'fs';
import {parse} from 'csv-parse/sync';

export class DataProvider{

    static gettestDataFromJson(filePath:string)
    {
        let data:string = JSON.parse(fs.readFileSync(filePath,'utf8'));
        return data;
    }

    static getTestDataFromCsv(filePath:string)
    {
        let data= parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
        return data;
    }



}