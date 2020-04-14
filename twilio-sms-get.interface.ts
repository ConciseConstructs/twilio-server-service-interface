import { IRequest, IResponse } from './LambdaClass.interface'

export interface ITwilioSmsGetRequest extends IRequest {
  acctId:string
  authToken:string
  accountSid:string
  sid:string
}

export interface ITwilioSmsGetResponse extends IResponse {   // https://www.twilio.com/docs/sms/quickstart/node
  success:boolean
  details:any
  thirdParty: {
    twilio: {
      accountSid:string
      apiVersion:string
      body:string
      dateCreated:string
      dateUpdated:string
      dateSent:string
      direction:"outbound-api"|"inbound-api"
      errorCode:string|null
      errorMessage:string|null
      from:string
      messagingServiceSid:string|null
      numMedia:string
      numSegments:string
      price:number
      priceUnit:string
      sid:string
      status:"queued"|"sending"|"sent"|"accepted"|"receiving"|"received"|"delivered"|"undelivered"|"failed"
      subresourceUris: {
        media:string
      },
      to:string
      uri:string
    }
  }
}