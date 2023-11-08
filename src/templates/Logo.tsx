import { AppConfig } from '@/utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        className="mr-1 stroke-current text-primary-500"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="space_1" transform="translate(-63.995 -186)">
          <path
            id="Path_54"
            data-name="Path 54"
            d="M82.032,189.637a12.99,12.99,0,1,0,8.331,8.334"
            fill="none"
            stroke="#498efc"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <path
            id="Path_55"
            data-name="Path 55"
            d="M89.414,208.23c1.484,2.54,1.989,4.5,1.181,5.341-1.724,1.791-8.765-2.193-15.727-8.9s-11.208-13.589-9.485-15.38c.888-.922,3.189-.312,6.164,1.415"
            fill="none"
            stroke="#498efc"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
          <circle
            id="Ellipse_19"
            data-name="Ellipse 19"
            cx="6"
            cy="6"
            r="6"
            transform="translate(81 187)"
            fill="none"
            stroke="#f1d17c"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </g>
      </svg>
      {AppConfig.site_name}
    </span>
  );

  // return (
  //   <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
  //     <svg
  //       className="mr-1 stroke-current text-primary-500"
  //       xmlns="http://www.w3.org/2000/svg"
  //       width={size}
  //       height={size}
  //       viewBox="0 0 24 24"
  //       strokeWidth="1.5"
  //       fill="none"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M0 0h24v24H0z" stroke="none" />
  //       <rect x="3" y="12" width="6" height="8" rx="1" />
  //       <rect x="9" y="8" width="6" height="12" rx="1" />
  //       <rect x="15" y="4" width="6" height="16" rx="1" />
  //       <path d="M4 20h14" />
  //     </svg>

  //     {AppConfig.site_name}
  //   </span>
  // );
};

export { Logo };
