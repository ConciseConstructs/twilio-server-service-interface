import { IRequest, IResponse } from './LambdaClass.interface'


export interface ITwilioSmsSendRequest extends IRequest {
  acctId:string
  authToken:string
  accountSid:string
  transmission:{ id:string, from:string, message:string }
  contact:{ id:string, phone:string }
}


export interface ITwilioSmsSendResponse extends IResponse { // https://www.twilio.com/docs/sms/quickstart/node
  details: {
    contact:string
    transmission:string
    ledger: {
      id:string
      outcomes: [
        { addForeignLinkSuccess:boolean, foreignTable:string },
        { saveSuccess:boolean, details?:any }
      ]
    }
  }
  thirdParty: {
    twilio: {
      account_sid:string
      api_version:string
      body:string
      date_created:string|Date
      date_sent:string|Date
      date_updated:string|Date
      direction:string
      error_code:string|null
      error_message:string|null
      from:string
      messaging_service_sid:string
      num_media:string
      num_segments:string
      price:number
      price_unit:string
      sid:string
      status:"queued"|"sending"|"sent"|"accepted"|"receiving"|"received"|"delivered"|"undelivered"|"failed"
      subresource_uris: {
        media:string
      },
      to:string
      uri:string
    }
  }
}