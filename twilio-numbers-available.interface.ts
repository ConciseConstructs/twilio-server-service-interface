
import {  IRequest, IResponse, } from './LambdaClass.interface'

export interface ITwilioNumbersAvailableRequest extends IRequest {
  accountSid?:string
  authToken?:string
  areaCode:number
}

export interface ITwilioNumbersAvailableResponse extends IResponse {
  thirdParty: {
    twilio: { // * (Documentation) https://www.twilio.com/docs/phone-numbers/api/available-phone-numbers
      availableNumbers: {
        friendly_name:string
        phone_number:string
        lata:string
        rate_center:string
        latitude:string
        longitude:string
        region:string
        postal_code:string
        iso_country:string
        capabilities:{
          voice:boolean
          SMS:boolean
          MMS:boolean
        },
        beta:boolean
      }[]
    }
  }
}