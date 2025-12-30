// Video组件需要使用forwardRef
import { forwardRef, ForwardRefRenderFunction } from 'react';

// 自定义VideoProps类型，约束src为string类型
type VideoProps = Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> & {
  src?: string;
  // 如需要其他自定义属性，可在此添加
};

const VideoComponent: ForwardRefRenderFunction<HTMLVideoElement, VideoProps> = (props, ref) => {
  const { src, children, ...restProps } = props;
  
  return (
    <video ref={ref} {...restProps}>
      {children}
      {src && typeof src === 'string' && <source src={src} type="video/mp4" />}
    </video>
  );
};

export default forwardRef(VideoComponent);