define({ "api": [
  {
    "type": "get",
    "url": "/health",
    "title": "Get current service status",
    "name": "Health",
    "group": "System",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>'ok' or 'failed'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controllers.js",
    "groupTitle": "System"
  },
  {
    "type": "get",
    "url": "/exposures",
    "title": "Query ODI exposures",
    "description": "<p>Returns all resource registration detail that belongs to a user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "find",
            "description": "<p>Optional Mongo find query - defaults to {}</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sort",
            "description": "<p>Optional Mongo sort object - defaults to {}</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "select",
            "description": "<p>Optional Fields to load - defaults to 'logical_id'</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Optional Maximum number of records to return - defaults to 100</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "skip",
            "description": "<p>Optional Record offset for pagination</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>A valid JWT token &quot;Bearer: xxxxx&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "resources",
            "description": "<p>Resource detail</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controllers.js",
    "group": "_usr_local_git_odi_controllers_js",
    "groupTitle": "_usr_local_git_odi_controllers_js",
    "name": "GetExposures"
  },
  {
    "type": "get",
    "url": "/stage",
    "title": "Request to stage ODI exposures",
    "description": "<p>From a list of exposure_ids, it makes sure user has access to it, find where the data is (on disk, sda, etc..) TODO - thaw them if necessary and</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "exposure_ids",
            "description": "<p>List of exposure IDs to thaw / stage</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "authorization",
            "description": "<p>A valid JWT token &quot;Bearer: xxxxx&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "exposures",
            "description": "<p>staged</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./controllers.js",
    "group": "_usr_local_git_odi_controllers_js",
    "groupTitle": "_usr_local_git_odi_controllers_js",
    "name": "GetStage"
  }
] });
