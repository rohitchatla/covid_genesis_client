import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

import Sym from './components/mycompo/sym';
import JnUpload from './components/mycompo/JnUpload';
import JnUploadUrl from './components/mycompo/JnUploadUrl';
import Xray from './components/mycompo/xray';
import Xray2 from './components/mycompo/xray2';
import CsvRemote from './components/mycompo/csvRemote';
import Automater from './components/mycompo/automater';

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" replace /> },
        { path: 'app', element: <DashboardApp /> },
        { path: 'user', element: <User /> },
        { path: 'sym', element: <Sym /> },
        // { path: 'products', element: <Products /> },
        { path: 'images_c', element: <Products type={'covid'} /> },
        { path: 'images_n', element: <Products type={'normal'} /> },
        { path: 'blog', element: <Blog /> },
        { path: 'jnupload', element: <JnUpload /> },
        { path: 'automater', element: <Automater /> },
        {
          path: 'jnuploadurl/:name',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/fastai/course-v3/master/nbs/dl1/00_notebook_tutorial.ipynb'
              }
              title={'sym'}
            />
          )
        }, //{...props}
        {
          path: 'jnuploadurl/1',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/Covid-Genesis/master/classfication/%5Bclassi_3%5D_symptoms-covid-19-using-7-machine-learning-98.ipynb'
              }
              title={'Symptoms Analysis'}
            />
          )
        },
        {
          path: 'jnuploadurl/2',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/Covid-Genesis/master/covid-19-LSTM-Analysis-ML-DeepLearning-master/novel_covid_19_lstm.ipynb'
              }
              title={'Cases Prediction'}
            />
          )
        },
        {
          path: 'jnuploadurl/3',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/Covid-Genesis/master/Covid_detection_CNN-master/%5BXray_2%5D_Covid_detection_using_chest_X_Ray_(Day_2-VGG-16).ipynb'
              }
              title={'Image Analysis(VGG16)'}
            />
          )
        },
        {
          path: 'jnuploadurl/4',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/Covid-Genesis/master/Covid_detection_CNN-master/%5BXray_1%5D_Covid_detection_using_chest_X_Ray(using_ResNet_50)%20(2).ipynb'
              }
              title={'Image Analysis(ResNet50)'}
            />
          )
        },
        { path: 'xray', element: <Xray /> },
        { path: 'xray2', element: <Xray2 /> },
        { path: 'csvremote', element: <CsvRemote /> },
        {
          path: 'jnuploadurl/5',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/vgg16-with-encoder.ipynb'
              }
              title={'VGG16[new]'}
            />
          )
        },
        {
          path: 'jnuploadurl/6',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/vgg19-with-encoder.ipynb'
              }
              title={'VGG19[new]'}
            />
          )
        },
        {
          path: 'jnuploadurl/7',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/covid-19-chest-xray-with-gradcam.ipynb'
              }
              title={'Resnet18-34[new]'}
            />
          )
        },
        {
          path: 'jnuploadurl/8',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/nasnet.ipynb'
              }
              title={'Nasnet'}
            />
          )
        },
        {
          path: 'jnuploadurl/9',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/covid19-radiography-efficientnetb6-v2.ipynb'
              }
              title={'EfficientNetV2'}
            />
          )
        },
        {
          path: 'jnuploadurl/10',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/densenet121.ipynb'
              }
              title={'Densenet121'}
            />
          )
        },
        {
          path: 'jnuploadurl/11',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/mobilenet_100itrs_epochs.ipynb'
              }
              title={'MobileNetV2'}
            />
          )
        },
        {
          path: 'jnuploadurl/12',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/xception.ipynb'
              }
              title={'Xception'}
            />
          )
        },
        {
          path: 'jnuploadurl/13',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/vgg16%2BRF.ipynb'
              }
              title={'VGG16+RF'}
            />
          )
        },
        {
          path: 'jnuploadurl/14',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/covid19-classification-using-dwt-glcm-and-u-net.ipynb'
              }
              title={'Unet(DWT, GLCM)'}
            />
          )
        },
        {
          path: 'jnuploadurl/15',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/swimtransformercovid19.ipynb'
              }
              title={'Swimtrans'}
            />
          )
        },
        {
          path: 'jnuploadurl/16',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/99-accuracy-using-inceptionresnetv2.ipynb'
              }
              title={'InceptionResnetV2'}
            />
          )
        },
        {
          path: 'jnuploadurl/17',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/rohitchatla/dl_models_nbooks-Covid-Genesis-/master/lung-image-classification-97-acc.ipynb'
              }
              title={'CustomModel'}
            />
          )
        },
        {
          path: 'jnuploadurl/18',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/D-Aditya-Amarnath/Covid-19/main/expo/CovidDataExpo.ipynb'
              }
              title={'Expo(S, D, T)'}
            />
          )
        },
        {
          path: 'jnuploadurl/19',
          element: (
            <JnUploadUrl
              val={
                'https://raw.githubusercontent.com/D-Aditya-Amarnath/Covid-19/main/sarima/covid-19-sarima.ipynb'
              }
              title={'Sarima'}
            />
          )
        }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '/', element: <Navigate to="/dashboard" /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
