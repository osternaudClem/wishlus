import * as React from 'react';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      fill="none"
      height="1em"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M20.838 13.71a8.932 8.932 0 00.086-2.858.558.558 0 00-.557-.473h-7.805a.562.562 0 00-.562.562v2.206c0 .31.252.562.562.562h4.275c.176 0 .305.18.239.343-.935 2.31-3.39 3.826-6.132 3.32-2.106-.39-3.832-2.06-4.284-4.153a5.477 5.477 0 018.369-5.776.572.572 0 00.73-.06l1.703-1.733a.559.559 0 00-.046-.832 8.897 8.897 0 00-5.161-1.815c-4.872-.135-9.091 3.823-9.25 8.694C2.838 16.805 6.932 21 12 21c4.383 0 8.037-3.14 8.838-7.29z"
        fill="currentColor"
        fillRule="evenodd"
        opacity={1}
      />
    </svg>
  );
};

const MemoGoogleIcon = React.memo(GoogleIcon);
export default MemoGoogleIcon;
