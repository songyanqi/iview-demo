const Mock = require('mockjs')
const Random = Mock.Random

Mock.mock(
    '/dynamic/table',
    'post',
    {
        "content|10" : [
            {
                "id|+1" : 1 ,
                createdAt : Mock.mock('@date("yyyy-MM-dd hh:mm:ss")'),
                color : Random.color(),
                content : Random.cparagraph(1 , 3),
                title : Random.title(1 , 3),
                "name" : Random.cname(),
                Address:Random.city(),
            }
        ]
    }
)