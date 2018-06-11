var config = {
        "_id" : "seguridad",
        "members" : [
                {
                        "_id" : 0,
                        "host" : "server1:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 1,
                        "host" : "server2:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 2,
                        "host" : "server3:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : false,
                        "hidden" : true,
                        "priority" : 0,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 3,
                        "host" : "server4:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : false,
                        "hidden" : true,
                        "priority" : 0,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(3600),
                        "votes" : 1
		},
                {
                        "_id" : 4,
                        "host" : "server5:27017",
                        "arbiterOnly" : true,
                        "buildIndexes" : false,
                        "hidden" : false,
                        "priority" : 0,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
		}
        ]
}
//rs.initiate(config);
