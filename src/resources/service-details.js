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
            "hasChildren":false,

        },

        {
            "name": "Span 2",
            "start": 6,
            "duration": 2,
            "parent": "Mock services 2",
            "hasChildren":true,
            "Children":[
                {
                    "name": "Span 3",
                    "time": 6,
                    "text": "Initiate Span-3",
                    "parent": "Span 2",
                    "hasChildren":true,
                    "Children":[
                        {
                            "name": "Span 4",
                            "time": 6,
                            "text": "Initiate Span-4",
                            "parent": "Span 3",
                            "hasChildren":true,
                            "Children":[
                                {
                                    "name": "Span 5",
                                    "start": 6,
                                    "duration": 1,
                                    "parent": "Span 4",
                                    "hasChildren":false,
                                    "Children":[]
                                }
                            ]
                        }
                    ]
                }
            ]
        },

        {
            "name": "Span 3",
            "start": 6,
            "duration": 1,
            "parent": "Span-2",
            "hasChildren":false,
        },

        {
            "name": "Span 4",
            "start": 10,
            "duration": 2,
            "parent": "Mock Services",
        }


    ],
    "Links" : [
        {
            "to": "Span 1",
            "order": 1,
            "text": "Initiate Span 1",
            "hasChildren":false
        },

        {
            "to": "Span 2",
            "order": 1,
            "text": "Initiate Span 2",
            "hasChildren":true
        },
        {
            "to": "Span 5",
            "order": 1,
            "text": "Initiate Span 5",
            "hasChildren":false
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

