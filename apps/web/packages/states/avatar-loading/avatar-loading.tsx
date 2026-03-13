import type { AvatarProps } from '@mantine/core';
import { Skeleton, getRadius, getSize } from '@mantine/core';
import classes from './avatar-loading.module.css';

export function AvatarLoading({
  size: sizeProp,
  radius: radiusProp = 1000,
}: AvatarProps) {
  const size = getSize(sizeProp ?? 'md', 'avatar-size');
  const radius = getRadius(radiusProp);

  return (
    <Skeleton
      className={classes.avatarState}
      style={{
        height: size,
        width: size,
        borderRadius: radius,
      }}
    />
  );
}
