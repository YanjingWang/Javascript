import boto3
import os

if __name__ == '__main__':
    files_to_upload = [
        # 'about.html',
        # 'hireme.html',
        # 'index.html',
        # 'bettingguide.html',
        'football.html',
        # 'tiktok.html'
    ]

    s3 = boto3.resource('s3',
                        aws_access_key_id=os.environ['AWS_ACCESS_KEY'],
                        aws_secret_access_key=os.environ['AWS_SECRET_KEY'],
                        region_name=os.environ['REGION_NAME'])    
    
    for file in files_to_upload:
        print(f'Uploading: {file}')
        data = open(file, 'rb')
        bucket = s3.Bucket('www.liamhartley.co.uk')
        response = bucket.put_object(Key=f'{file[:-5]}', Body=data, ContentType='text/html')
        print(response)
        print(f'Uploaded: {file}')
        print(f'----------------------------')

    print(f'All files uploaded :)')
