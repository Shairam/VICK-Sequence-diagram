var jsonMainService = [{
    "Name": "Mock services 2",
    "Duration": 15,
    "start": 0,
    "Spans": [
        {
            "name": "Span 1",
            "start": 1,
            "duration": 3,
            "parent": "Mock services",
            "Links": [{
                "to": "Mock services",
                "time": 4,
                "text": "Finish span"
            }]
        },

        {
            "name": "Span 2",
            "start": 6,
            "duration": 2,
            "parent": "Mock services",
            "Links":[
                {
                    "to": "Span 3",
                    "time": 6,
                    "text": "Initiate Span-3"
                },
                {
                    "to": "Mock services",
                    "time": 8,
                    "text": "Finish span"
                }
            ]
        },

        {
            "name": "Span 3",
            "start": 6,
            "duration": 1,
            "parent": "Span-2",
            "Links":[{
                "to": "Span-2",
                "time": 7,
                "text": "Finish span"
            }]
        },

        {
            "name": "Span 4",
            "start": 10,
            "duration": 2,
            "parent": "Mock Services",
            "Links":[{
                "to": "Mock services",
                "time": 12,
                "text": "Finish span"
                }
            ]
        }

    ],
    "Links" : [
        {
            "to": "Span 1",
            "order": 1,
            "text": "Initiate Span 1",
            "hasChildren":true
        }
        // },
        // {
        //     "to": "Span-2",
        //     "order": 2,
        //     "text": "Initiate Span-2"
        // },
        // {
        //     "to": "Span-4",
        //     "order": 3,
        //     "text": "Initiate Span-4"
        // }
    ]

}];
export default jsonMainService;

