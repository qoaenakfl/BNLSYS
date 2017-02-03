var mysql = express('./sql.connection');

connection.connect(function(err){
    if(err){
        console.log('batabse connection error');
    }
});