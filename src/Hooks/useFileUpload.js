import S3FileUpload from "react-s3";

const useFileUpload = () => {
    //const [uploadedFileUrl, setUploadedFileUrl] = useState([]);
    let uploadedFileUrl = [];

    const config = {
        bucketName: 'virtual-learning',
        region: 'us-east-2',
        accessKeyId: process.env.REACT_APP_AWS_IAM_ACCESS_KEY,
        secretAccessKey: process.env.REACT_APP_AWS_IAM_SECRET,
    }

    const uploadFiles = async (_files, uploadFolder) => {
        for (const file of _files) {
            const ext = file.name.split('.').pop();
            const _type = file.type;

            // first of all, this is insane but fuck it!
            Object.defineProperty(file, 'name', {
                writable: true,
                value: 'vl_' + new Date().getTime() + '.' + ext
            });

            try {
                config.dirName = uploadFolder;
                const res = await S3FileUpload.uploadFile(file, config);
                uploadedFileUrl.push({ Filename: res.location, FileType: _type });
            } catch (err) {
                console.log(err)
            }
        }
    }


    return {
        uploadFiles,
        uploadedFileUrl
    }
}

export default useFileUpload;