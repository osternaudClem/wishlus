import * as React from 'react';

const ShowIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      fill="none"
      height="1em"
      viewBox="0 0 25 25"
      width="1em"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M15.41 14.326a3.162 3.162 0 11-6.322 0 3.162 3.162 0 016.323 0z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
      <path
        d="M21.5 14.325c-1.961-4.128-5.444-6.604-9.252-6.604h.004c-3.808 0-7.291 2.476-9.252 6.604"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
    </svg>
  );
};

const MemoShowIcon = React.memo(ShowIcon);
export default MemoShowIcon;
