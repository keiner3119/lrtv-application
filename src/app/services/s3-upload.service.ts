import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
import * as S3 from 'aws-sdk/clients/s3';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class S3UploadService {

  private s3Source = new BehaviorSubject('default');
  s3Flag = this.s3Source.asObservable();

  constructor() { }

  uploadToBucket(file): Promise<any> {
    return new Promise((resolve) => {
      const contentType = file.type;
      AWS.config.region = 'us-east-2';
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-2:2bf5be8c-c607-4977-9f97-e296378f7253',
      });
      const bucket = new S3(
        {
          accessKeyId: 'AKIA4BZVK763MCTYYQXP',
          secretAccessKey: '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',
          region: 'us-east-2',

        }
      );
      const str = contentType
      const res = str.split("/");
      const file_name = res[res.length - 1];
      const objKey = (Math.floor(Math.random() * 1000000000) + 1) + '_' + Math.round((new Date()).getTime() / 1000) + "." + file_name;

      const params = {
        Bucket: 'lrtv-media-assets',
        Key: objKey,
        Body: file,
        ACL: 'bucket-owner-full-control',
        ContentType: contentType,

      };
      bucket.upload(params, function (err, data) {
        if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
        }
        resolve(data);
      })

    });
  }
}
