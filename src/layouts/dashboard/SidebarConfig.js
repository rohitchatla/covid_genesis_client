import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'user',
    path: '/dashboard/user',
    icon: getIcon(peopleFill)
  },
  {
    title: '--------------------------',
    path: '',
    icon: ''
  },
  {
    title: 'Symptoms',
    path: '/dashboard/sym',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Symptoms Analysis',
    path: '/dashboard/jnuploadurl/1',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: '--------------------------',
    path: '',
    icon: ''
  },
  {
    title: 'Cases Predictions Analysis[LSTM]',
    path: '/dashboard/jnuploadurl/2',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'JNUpload',
    path: '/dashboard/jnupload',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Automater',
    path: '/dashboard/automater',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: '--------------------------',
    path: '',
    icon: ''
  },
  {
    title: 'Xray prediction(VGG16)',
    path: '/dashboard/xray',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Xray Prediction Analysis(VGG16)',
    path: '/dashboard/jnuploadurl/3',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Xray prediction(ResNet50)',
    path: '/dashboard/xray2',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Xray prediction Analysis(ResNet50)',
    path: '/dashboard/jnuploadurl/4',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: '--------------------------',
    path: '',
    icon: ''
  },
  {
    title: 'Images(Covid)',
    path: '/dashboard/images_c',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Images(Normal)',
    path: '/dashboard/images_n',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: '--------------------------',
    path: '',
    icon: ''
  },
  {
    title: 'VGG16[new]',
    path: '/dashboard/jnuploadurl/5',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'VGG19[new]',
    path: '/dashboard/jnuploadurl/6',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Resnet18-34[new]',
    path: '/dashboard/jnuploadurl/7',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Nasnet',
    path: '/dashboard/jnuploadurl/8',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'EfficientNetV2',
    path: '/dashboard/jnuploadurl/9',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Densenet121',
    path: '/dashboard/jnuploadurl/10',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'MobileNetV2',
    path: '/dashboard/jnuploadurl/11',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Xception',
    path: '/dashboard/jnuploadurl/12',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'VGG16+RF',
    path: '/dashboard/jnuploadurl/13',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Unet(DWT, GLCM)',
    path: '/dashboard/jnuploadurl/14',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Swimtrans',
    path: '/dashboard/jnuploadurl/15',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'InceptionResnetV2',
    path: '/dashboard/jnuploadurl/16',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'CustomModel',
    path: '/dashboard/jnuploadurl/17',
    icon: getIcon(shoppingBagFill)
  },

  {
    title: '--------------------------',
    path: '',
    icon: ''
  },
  {
    title: 'Expo(S, D, T)',
    path: '/dashboard/jnuploadurl/18',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: 'Sarima',
    path: '/dashboard/jnuploadurl/19',
    icon: getIcon(shoppingBagFill)
  },
  {
    title: '--------------------------',
    path: '',
    icon: ''
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
