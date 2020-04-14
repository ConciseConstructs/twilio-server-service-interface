import {  IRequest, IResponse, } from './LambdaClass.interface'

export interface ITwilioSubaccountCreateRequest extends IRequest {
  accountSid:string
  authToken:string
}

export interface ITwilioSubaccountCreateResponse extends IResponse {
  thirdParty: {
    twilio: { // * (Documentation) https://www.twilio.com/docs/usage/api/subaccounts?code-sample=code-create-a-subaccount&code-language=Node.js&code-sdk-version=3.x"auth_token": "auth_token",
      subaccount: {
        date_created:string
        date_updated:string
        friendly_name:string
        owner_account_sid:string
        sid:string
        status:"closed",
        subresource_uris: {
          available_phone_numbers:string
          calls:string
          conferences:string
          incoming_phone_numbers:string
          notifications:string
          outgoing_caller_ids:string
          recordings:string
          transcriptions:string
          addresses:string
          signing_keys:string
          connect_apps:string
          sip:string
          authorized_connect_apps:string
          usage:string
          keys:string
          applications:string
          short_codes:string
          queues:string
          messages:string
          balance:string
        },
        type:"Full",
        uri:string
      }
    }
  }
}