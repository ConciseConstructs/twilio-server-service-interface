import { IRequest, IResponse } from './LambdaClass.interface'

export interface ITwilioNumbersPurchaseRequest extends IRequest {
  acctId:string
  accountSid:string
  authToken:string
  friendlyName:string
  number:string
}


export interface ITwilioNumbersPurchaseResponse extends IResponse{
  thirdParty: {
    twilio: {
      account_sid:string
      address_requirements:string
      address_sid:string
      api_version:string
      beta:boolean
      date_created:string
      date_updated:string
      emergency_status:string
      emergency_address_sid:string
      friendly_name:string
      identity_sid:string
      origin:string
      phone_number:string
      sid:string
      sms_application_sid:string|null
      sms_fallback_method:string
      sms_fallback_url:string
      sms_method:string
      sms_url:string
      status_callback:string
      status_callback_method:string
      trunk_sid:string|null
      uri:string
      voice_application_sid:string|null
      voice_caller_id_lookup:boolean
      voice_fallback_method:string
      voice_fallback_url:string|null
      voice_method:string
      voice_url:string
      capabilities: {
        mms:boolean
        sms:boolean
        voice:boolean
      }
    }
  }
}