import Preview from 'heyui/src/components/imagepreview/imagepreview-modal';
import Modal from 'heyui/src/plugins/modal';

export default function (datas, index) {
  return Modal({
    className: 'h-image-preview-modal',
    component: {
      vue: Preview,
      datas: {
        isShow: true,
        datas,
        index
      }
    }
  });
}
