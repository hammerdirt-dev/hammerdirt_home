# Rethinking hammerdirt

After completing the national litter survey on Swiss lakes and rivers. We are redesigining upgrading the API and the client applications. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Focus on AI and forecasting

Hammerdirt projects are focussed on assessing and forecasting environmental variables at the local scale. This includes water quality, visible pollutants, biodiversity and temperature fluctuations. All of which require a computational backend. We need to decide how much of the forecasting process should be exceuted on the client side (if any). This will drive how much data needs to be stored on the client.

## Exporting reports and forecasts

Clients should have access to standard reports in .PDF format. Defining the content of these reports is also a concern of this build

## Oauth and two fator login

These need to be implemented. They were not in previous versions.

## Testing

Unit tests for components were not done in previous versions. Unit testing will be implemented with the new client.
