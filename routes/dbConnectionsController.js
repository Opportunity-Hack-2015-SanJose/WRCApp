var mysql = require('mysql');
function getConnection(){	
	var connection=mysql.createConnection({
	    host     : 'samaritan.cqsrraflln0o.us-west-1.rds.amazonaws.com',
	    user     : 'samaritan',
	    password : 'samaritan',
	    database : 'WorkerResourceCenter',
	    port     : '3306'
	});
	return connection;
	}
	
exports.getConnection=getConnection;