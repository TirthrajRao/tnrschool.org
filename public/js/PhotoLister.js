var albumBucketName = 'tnrschool-transfer-certificate';

// **DO THIS**:
//   Replace this block of code with the sample code located at:
//   Cognito -- Manage Identity Pools -- [identity_pool_name] -- Sample Code -- JavaScript
//
// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-2:b850f213-98c6-48ef-9aee-c3b1f8ab8116',
});

// Create a new service object
var s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: albumBucketName }
});

// A utility function to create HTML.
function getHtml(template) {
    return template.join('\n');
}

function listAlbums() {
    s3.listObjects({ Delimiter: '/' }, function (err, data) {
        if (err) {
            return alert('There was an error listing your albums: ' + err.message);
        } else {
            var albums = data.CommonPrefixes.map(function (commonPrefix) {
                var prefix = commonPrefix.Prefix;
                var albumName = decodeURIComponent(prefix.replace('/', ''));
                return getHtml([
                    '<li>',
                    '<button style="margin:5px;" onclick="viewAlbum(\'' + albumName + '\')">',
                    albumName,
                    '</button>',
                    '</li>'
                ]);
                viewAlbum('"' + albumName + '"');
            });
            var htmlTemplate = [
                '<h2>Albums</h2>',
                '<ul>',
                getHtml(albums),
                '</ul>',
            ]
            document.getElementById('viewer').innerHTML = getHtml(htmlTemplate);
        }
    });
}

function viewAlbum(albumName, page = 1) {
    // console.log("the perameters", albumName, page)
    var albumPhotosKey = encodeURIComponent(albumName) + '/';
    s3.listObjects({ Prefix: albumPhotosKey }, function (err, data) {
        if (err) {
            return alert('There was an error viewing your album: ' + err.message);
        }
        // 'this' references the AWS.Response instance that represents the response
        console.log("THIS IS DATA FROM BUCKET", data);
        var href = this.request.httpRequest.endpoint.href;
        var bucketUrl = href + albumBucketName + '/';

        var photos = data.Contents.map(function (photo, index) {
            if (photo.Size > 0 && index>=((page-1)*25 - 1) && index<=(page*25 - 1)) {
                var photoKey = photo.Key;
                var photoUrl = bucketUrl + encodeURIComponent(photoKey);
                return getHtml([
                    '<tr>',
                    '<td>',
                    photoKey.replace(albumPhotosKey, ''),
                    '</td>',
                    '<td>',
                    '<br/>',
                    '<a class="download_certificate text_orange" href="' + photoUrl + '" download="' + photoKey.replace(albumPhotosKey, '') + '"><i class="fa fa-download" aria-hidden="true"></i>Download</a>',
                    '</td>',
                    '</tr>',
                ]);
            }
        });
        // console.log("photoes in js file", photos);
        var noOfPages = Math.ceil(photos.length / 25);
        // console.log("noOfPage in js file", noOfPages);
        var pageArray = new Array(noOfPages).fill(0);
        // console.log("pageArray in js file", pageArray);
        var pages = pageArray.map(function (val, index) {
            return getHtml([
                '<li><a href="javascript:viewAlbum(\'' + albumName + '\','+(index+1)+');">'+(index+1)+'</a></li>',
            ])
        })
        var htmlTemplate = [
            '<div>',
            '<table>',
            '<thead>',
            '<tr>',
            '<th>Name</th>',
            '<th>Action</th>',
            '</tr>',
            '</thead>',
            '<tbody>',
            getHtml(photos),
            '</tbody>',
            '</table>',
            '<div class="page_pagination">',
            '<ul>',
            '<li><a href="javascript:viewAlbum(\'' + albumName + '\','+(page-1)+');"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>',
            getHtml(pages),
            '<li><a href="javascript:viewAlbum(\'' + albumName + '\','+(page+1)+');"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>',
            '</ul>',
            '</div>',
            '</div>',
        ]
        document.getElementById('tableData').innerHTML = getHtml(htmlTemplate);
    });
}