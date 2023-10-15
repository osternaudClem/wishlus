import * as React from 'react';

const HideIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      fill="none"
      height="1em"
      viewBox="0 0 25 25"
      width="1em"
      {...props}
    >
      <path
        d="M21.5 8.01c-1.961 4.129-5.444 6.606-9.252 6.606h.004c-3.808 0-7.291-2.477-9.252-6.605M18.84 11.88l2.111 2.11M5.581 11.88l-2.11 2.11M15.427 17.197l-.845-2.91M8.993 17.197l.845-2.91"
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
      />
    </svg>
  );
};

const MemoHideIcon = React.memo(HideIcon);
export default MemoHideIcon;
