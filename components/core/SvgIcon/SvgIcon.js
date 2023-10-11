import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import Icon from '@mui/material/Icon';

// const Root = styled(Box)(({ theme, ...props }) => ({
//   width: props.size,
//   height: props.size,
//   minWidth: props.size,
//   minHeight: props.size,
//   fontSize: props.size,
//   lineHeight: props.size,
//   color: {
//     primary: theme.palette.primary.main,
//     secondary: theme.palette.secondary.main,
//     info: theme.palette.info.main,
//     success: theme.palette.success.main,
//     warning: theme.palette.warning.main,
//     action: theme.palette.action.active,
//     error: theme.palette.error.main,
//     disabled: theme.palette.action.disabled,
//     inherit: undefined,
//   }[props.color],
// }));

const SvgIcon = forwardRef((props, ref) => {
  const { children, size, sx, className, color } = props;
  const iconPath = props.children.replace(':', '.svg#');

  return useMemo(
    () => (
      <>
        {!props.children.includes(':') && (
          <Icon ref={ref} {...props} />
        )}
      </>
    ),
    [children, ref, className, size, sx, color, iconPath]
  );
});

SvgIcon.propTypes = {
  children: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
  color: PropTypes.oneOf([
    'inherit',
    'disabled',
    'primary',
    'secondary',
    'action',
    'error',
    'info',
    'success',
    'warning',
  ]),
};

SvgIcon.defaultProps = {
  children: '',
  size: 24,
  sx: {},
  color: 'inherit',
};

export default SvgIcon;
