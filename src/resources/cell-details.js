export  var cellDetails = [
    {

        "name": "Global Gateway",
        "Cells": [
            {
                "name": "Cell 1",
                "parent": "Global Gateway",
                "hasChildren": false
            },
            {
                "name": "Cell 2",
                "parent": "Global Gateway",
                "hasChildren": false
            },
            {
                "name": "Cell 3",
                "parent": "Global Gateway",
                "hasChildren": false
            }],


        "Paths":
            {
                "parent": "Global Gateway",
                "to": "Cell 1",
                "text": "API Call",
                "hasChildren": true,
                "Children":[
                    {
                        "parent": "Cell 1",
                        "to": "Cell 2",
                        "text": "Service Name 1",
                        "hasChildren": false,
                        "Children":[]
                    },
                    {
                        "parent": "Cell 1",
                        "to": "Cell 3",
                        "text": "Service Name 2",
                        "hasChildren": true,
                        "Children":[
                            {
                                "parent": "Cell 3",
                                "to": "Cell 3",
                                "text": "Service Name 3",
                                "self":true,
                                "hasChildren": true,
                                "Children":[
                                    {
                                        "parent": "Cell 3",
                                        "to": "Cell 1",
                                        "text": "Service Name 4",
                                        "hasChildren": true,
                                        "Children":[
                                            {
                                                "parent": "Cell 1",
                                                "to": "Cell 6",
                                                "text": "Service Name 1",
                                                "hasChildren": false,
                                                "Children":[]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "parent": "Cell 1",
                        "to": "Cell 1",
                        "text": "Service Name 5",
                        "hasChildren": false,
                        "returnTo":"Global Gateway",
                        "self":true,
                        "Children":[],
                        "deactivate":true,
                    }
                ]
            }
    }
];
