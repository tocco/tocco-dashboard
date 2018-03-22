# TOCCO DEV DASHBOARD

Tocco Innovation Day project based on react-starter-kit

## Credentials for Adapters

### `credentials.json`

Credentials for adapters are read from `credentials.json` in the **current working directory**.

The file has the following syntax:

```json
{
 "teamcity": {
  "password": "JAi2rKIi4KNaqQc",
  "username": "dashboard"
 },
 "backoffice": {
  "password": "YTWWlD9u6MnE3Tw",
  "username": "dashboard"
 }
}
```

In this example, the adaptor **teamcity** uses the username **dashboard** and the password **JAi2rKIi4KNaqQc**.


### Obtaining Current Passwords from OpenShift

1. Change to the dashboard project: `oc project toco-dashboard`

2. Find a running pod:

   ```
   $ oc get pods -l app=dashboard
   NAME                 READY     STATUS    RESTARTS   AGE
   dashboard-12-mqdj9   1/1       Running   0          20h
   ```

3. extract `credentials.json` from one of the running pods:

   ```
   $ oc exec dashboard-12-mqdj9 -- cat credentials.json
   {
    "teamcity": {
     "password": "JAi2rKIi4KNaqQc",
     "username": "dashboard"
    },
    "backoffice": {
     "password": "YTWWlD9u6MnE3Tw",
     "username": "dashboard"
    }
   }
   ```

### Changing or Adding a Password for an Adapter on OpenShift

1. Change to the dashboard project: `oc project toco-dashboard`

2. Set username **peter** and password **1234** for adapter **backoffice**:

   ```
   oc set env dc/dashboard DBOARD_CREDS_backoffice=peter:1234
   ```

   This sets the **DBOARD_CREDS_backoffice** env. variable which is used to generate
   a `credentials.json` automatically.


### Removing a password for an Adapter on OpenShift

1. Change to the dashboard project: `oc project toco-dashboard`

2. Remove credentials for adapter **teamcity**:

   ```
   oc set env dc/dashboard DBOARD_CREDS_teamcitye=-
   ```
