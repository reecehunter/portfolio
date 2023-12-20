import { Icon, IconProps } from '@chakra-ui/icon'
import { FC } from 'react'

interface NostrCookingProps extends IconProps {}

const NostrCookingLogo: FC<NostrCookingProps> = ({ ...props }) => {
  return (
    <Icon
      viewBox='0 0 1080 290'
      focusable='false'
      stroke='currentColor'
      fill='none'
      {...props}
    >
      <g clipPath='url(#clip0_4_19)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M364.031 242.957C387.385 242.957 409.206 236.407 427.741 225.054C443.502 215.402 452.571 223.334 459.417 231.26L506.055 285.254C511.258 291.274 520.493 291.618 526.131 285.999L529.09 283.049C534.727 277.43 534.382 268.224 528.342 263.038L474.175 216.549C466.224 209.726 458.26 200.685 467.949 184.975C479.339 166.499 485.909 144.748 485.909 121.469C485.909 98.1893 479.352 76.4834 467.981 58.014C466.051 54.8859 465.444 51.1461 465.31 47.4764C465.073 40.8889 462.255 34.142 456.95 28.8477C451.645 23.5598 444.87 20.7502 438.267 20.5145C434.586 20.3807 430.841 19.7755 427.696 17.8514C409.161 6.53661 387.36 0 364.031 0C330.38 0 299.912 13.5956 277.855 35.5818C255.798 57.568 242.159 87.9321 242.159 121.482C242.159 144.736 248.716 166.467 260.087 184.93C262.017 188.065 262.624 191.798 262.758 195.468C262.995 202.055 265.814 208.802 271.118 214.096C276.423 219.384 283.198 222.194 289.807 222.43C293.489 222.563 297.234 223.169 300.378 225.093C318.907 236.427 340.702 242.963 364.031 242.963V242.957ZM497.171 254.189C495.982 255.374 495.873 257.266 496.928 258.572L510.542 275.519C512.67 278.169 516.633 278.386 519.042 275.984C521.452 273.582 521.228 269.632 518.576 267.51L501.575 253.94C500.258 252.889 498.366 252.997 497.177 254.182L497.171 254.189ZM435.385 192.601C395.982 231.878 332.093 231.878 292.683 192.601C253.28 153.324 253.28 89.6395 292.683 50.3561C332.086 11.0791 395.975 11.0791 435.385 50.3561C474.788 89.6331 474.788 153.317 435.385 192.601Z'
          fill='black'
        />
        <path
          d='M448.059 121.482C448.059 167.741 410.439 205.241 364.031 205.241C317.623 205.241 280.003 167.741 280.003 121.482C280.003 75.222 317.623 37.7225 364.031 37.7225C410.439 37.7225 448.059 75.222 448.059 121.482Z'
          fill='url(#paint0_linear_4_19)'
        />
        <path
          d='M4.59544 70.9598C4.59544 68.5452 5.80982 67.3347 8.23217 67.3347H86.048C88.1252 67.3347 89.1606 67.9782 89.1606 69.2588C89.1606 69.5518 89.1095 69.9022 89.0136 70.2909C88.3681 72.1639 87.7992 73.6165 87.3071 74.655L52.8125 146.532C52.1669 147.864 52.4162 148.526 53.5539 148.526C56.0785 148.577 60.6228 148.577 67.206 148.526H80.8581C82.3409 148.526 83.4275 148.883 84.1241 149.597C84.8144 150.31 85.1596 151.406 85.1596 152.89V165.237V177.661C85.1596 180.075 83.9452 181.286 81.5228 181.286H2.95924C0.683883 181.286 -0.281225 180.375 0.0639133 178.553C0.460183 176.775 0.856452 175.495 1.25272 174.705L35.6003 105.49C35.9966 104.656 36.1947 103.961 36.1947 103.42C36.1947 102.337 35.4533 101.795 33.9705 101.795H8.22578C5.80343 101.795 4.58905 100.368 4.58905 97.5076V70.9598H4.59544Z'
          fill='black'
        />
        <path
          d='M137.378 71.7052L190.714 176.992C191.059 177.68 191.232 178.279 191.232 178.769C191.232 180.451 189.474 181.286 185.965 181.286H162.969C160.297 181.286 158.616 181.133 157.926 180.833C157.038 180.381 156.021 179.107 154.884 176.998C153.203 173.838 150.455 172.316 146.652 172.411C139.627 172.513 133.396 172.513 127.957 172.411C121.776 172.411 115.589 172.411 109.409 172.411C105.996 172.411 103.624 173.845 102.289 176.699C101.253 178.916 100.358 180.235 99.617 180.655C98.8756 181.076 97.1946 181.286 94.5741 181.286L82.7819 181.209C80.2126 181.209 76.301 181.184 71.06 181.133C67.5 181.133 65.7168 180.273 65.7168 178.546C65.7168 177.954 65.9149 177.266 66.3112 176.476L119.354 71.6925C121.284 67.8954 124.275 65.9968 128.327 65.9968C132.38 65.9968 135.447 67.8954 137.378 71.6988V71.7052ZM133.818 136.326C132.929 134.548 131.619 131.917 129.887 128.413C129.344 127.821 128.819 127.528 128.327 127.528C127.784 127.528 127.266 127.846 126.768 128.49C125.777 130.312 124.416 133 122.69 136.549C122.096 137.931 122.492 138.721 123.879 138.913H132.929C133.671 138.913 134.041 138.543 134.041 137.804C134.092 137.167 134.016 136.67 133.818 136.326Z'
          fill='black'
        />
        <path
          d='M173.208 66.8187L221.872 66.5256C234.138 66.43 244.204 70.1889 252.066 77.8022C259.927 85.4155 263.858 95.3415 263.858 107.567C263.858 119.691 259.921 129.554 252.04 137.148C244.159 144.742 234.125 148.533 221.924 148.533H209.773C207.504 148.533 206.367 149.59 206.367 151.712V177.667C206.367 180.082 205.152 181.292 202.724 181.292H173.508C171.08 181.292 169.865 180.082 169.865 177.667V70.4438C169.865 68.0292 170.977 66.8187 173.202 66.8187H173.208ZM211.192 101.056H210.227C207.805 101.056 206.565 102.19 206.52 104.458V113.849C206.52 116.117 207.607 117.251 209.786 117.251H211.199C216.689 117.251 221.163 116.659 224.627 115.474C227.593 114.442 229.076 112.218 229.076 108.816C229.076 105.414 227.593 103.197 224.627 102.158C222.352 101.419 217.878 101.05 211.199 101.05L211.192 101.056Z'
          fill='black'
        />
        <path
          d='M525.753 63.0472C536.536 63.0472 546.634 65.723 556.055 71.0682C565.476 76.4199 572.935 83.7274 578.419 92.9907C580.151 95.8513 580.618 97.7498 579.831 98.6864C579.186 99.4764 578.15 100.19 576.712 100.833L553.122 111.263C549.804 112.741 547.855 113.085 547.261 112.295C546.769 111.753 546.002 110.791 544.96 109.409C539.962 103.101 533.557 99.9415 525.747 99.9415C519.068 99.9415 513.367 102.286 508.65 106.969C503.927 111.651 501.568 117.321 501.568 123.979C501.568 130.681 503.914 136.377 508.618 141.06C513.316 145.742 519.03 148.087 525.753 148.087C534.158 148.087 540.786 144.634 545.637 137.734C547.42 135.173 548.775 133.962 549.715 134.109C550.706 134.255 551.869 134.625 553.205 135.218L576.648 145.347C577.486 145.742 578.649 146.335 580.138 147.125C581.474 147.864 581.346 149.711 579.768 152.668C574.424 162.625 566.921 170.487 557.25 176.259C547.58 182.025 537.085 184.911 525.76 184.911C508.746 184.911 494.32 178.992 482.477 167.162C470.634 155.331 464.709 140.939 464.709 123.979C464.709 107.071 470.646 92.6913 482.515 80.8349C494.384 68.9786 508.797 63.0536 525.766 63.0536L525.753 63.0472Z'
          fill='black'
        />
        <path
          d='M621.823 62.9005C638.735 62.9005 653.154 68.8447 665.074 80.7201C676.994 92.602 682.951 106.969 682.951 123.832C682.951 140.696 677.007 155.127 665.112 166.977C653.218 178.833 638.786 184.758 621.83 184.758C604.873 184.758 590.377 178.839 578.508 167.008C566.64 155.178 560.702 140.786 560.702 123.826C560.702 106.867 566.652 92.5383 578.54 80.6819C590.435 68.8255 604.86 62.9005 621.823 62.9005ZM621.823 99.7247C615.144 99.7247 609.443 102.082 604.726 106.784C600.003 111.492 597.644 117.175 597.644 123.826C597.644 130.528 599.99 136.224 604.694 140.907C609.392 145.589 615.106 147.934 621.83 147.934C628.509 147.934 634.203 145.583 638.927 140.875C643.65 136.167 646.008 130.484 646.008 123.832C646.008 117.175 643.644 111.498 638.927 106.79C634.203 102.082 628.502 99.7311 621.83 99.7311L621.823 99.7247Z'
          fill='black'
        />
        <path
          d='M714.403 62.9005C731.315 62.9005 745.734 68.8447 757.654 80.7201C769.574 92.602 775.531 106.969 775.531 123.832C775.531 140.741 769.587 155.127 757.692 166.977C745.798 178.833 731.372 184.758 714.41 184.758C697.447 184.758 682.957 178.839 671.088 167.008C659.219 155.178 653.282 140.786 653.282 123.826C653.282 106.918 659.226 92.5383 671.12 80.6819C683.015 68.8255 697.44 62.9005 714.403 62.9005ZM714.403 99.7247C707.724 99.7247 702.023 102.082 697.306 106.784C692.583 111.492 690.224 117.175 690.224 123.826C690.224 130.528 692.57 136.224 697.274 140.907C701.972 145.589 707.686 147.934 714.41 147.934C721.133 147.934 726.783 145.583 731.507 140.875C736.23 136.167 738.588 130.484 738.588 123.832C738.588 117.175 736.224 111.498 731.507 106.79C726.783 102.082 721.082 99.7311 714.41 99.7311L714.403 99.7247Z'
          fill='black'
        />
        <path
          d='M796.456 66.8951C798.93 66.8951 800.164 68.1056 800.164 70.5202V88.1168C800.164 90.4804 800.432 91.6655 800.982 91.6655C801.429 91.6145 802.094 90.678 802.982 88.8559C804.861 84.7657 807.68 78.6496 811.438 70.5202C812.576 68.1056 814.557 66.8951 817.376 66.8951H846.604C848.63 66.8951 849.077 68.1056 847.94 70.5202L825.167 119.545C823.927 122.208 823.978 124.45 825.314 126.273L849.275 177.737C849.723 178.674 849.422 179.534 848.387 180.324C847.543 181.012 846.604 181.356 845.568 181.356H816.417C815.132 181.356 813.918 180.145 812.78 177.731L802.541 155.694C801.998 154.509 801.455 154.044 800.911 154.286C800.413 154.534 800.17 155.318 800.17 156.649V167.225V177.724C800.17 180.139 798.936 181.35 796.463 181.35H767.312C764.889 181.35 763.675 180.139 763.675 177.724V70.5138C763.675 68.0992 764.883 66.8888 767.312 66.8888H796.463L796.456 66.8951Z'
          fill='black'
        />
        <path
          d='M874.618 66.8951C877.04 66.8951 878.254 68.1056 878.254 70.5202V177.744C878.254 180.158 877.04 181.369 874.618 181.369H845.389C842.967 181.369 841.753 180.158 841.753 177.744V70.5138C841.753 68.0992 842.961 66.8888 845.389 66.8888H874.618V66.8951Z'
          fill='black'
        />
        <path
          d='M968.239 66.8187C970.662 66.8187 971.876 68.0292 971.876 70.4438V178.776C971.876 180.897 971.186 181.955 969.799 181.955C969.505 181.955 969.179 181.904 968.834 181.808C966.852 181.267 965.421 180.7 964.532 180.107L925.513 155.114C924.177 154.279 923.512 154.521 923.512 155.853V177.005C923.512 179.865 922.029 181.292 919.064 181.292H890.43C887.956 181.292 886.723 180.088 886.723 177.667V69.8513C886.723 67.5322 887.662 66.5256 889.541 66.8187C891.472 67.1627 892.756 67.5577 893.402 68.0037L931.457 93.8762C932.396 94.5196 933.137 94.8382 933.681 94.8382C934.671 94.8382 935.164 93.9526 935.164 92.1751V70.4374C935.164 67.9209 936.595 66.7167 939.465 66.8123C944.808 66.9142 949.602 66.9142 953.859 66.8123H968.252L968.239 66.8187Z'
          fill='black'
        />
        <path
          d='M1080 109.447C1080 107.032 1078.79 105.822 1076.36 105.822H1026.65C1024.23 105.822 1023.01 107.032 1023.01 109.447V138.581C1023.01 140.996 1024.23 142.207 1026.65 142.207H1038.71C1033.44 146.819 1027.12 148.699 1019.74 147.832C1018.62 147.673 1017.71 147.558 1017.01 147.488C1012.82 146.481 1009.11 144.366 1005.88 141.149C1001.18 136.466 998.829 130.771 998.829 124.068C998.829 119.781 999.813 115.901 1001.78 112.422C1002.86 110.53 1004.21 108.759 1005.87 107.109C1011.39 101.604 1018.16 99.3172 1026.17 100.26C1027.88 100.502 1029.11 100.642 1029.84 100.681C1030.82 100.821 1031.96 99.2025 1033.25 95.8195L1042.54 71.8201C1043.1 70.3548 1043.33 69.1188 1043.22 68.1058C1043.12 66.889 1041.44 65.876 1038.19 65.0732C1031.47 63.3467 1024.76 62.7733 1018.04 63.3403C1003.22 64.4043 990.443 70.2528 979.731 80.9306C976.733 83.9185 974.113 87.0722 971.87 90.3787C965.107 100.254 961.726 111.473 961.733 124.049H961.886C961.886 124.049 961.886 124.068 961.886 124.075C961.886 141.034 967.824 155.426 979.693 167.257C991.562 179.088 1006 185.007 1023.01 185.007V184.975C1028.37 184.962 1033.73 184.236 1039.09 182.77C1040.51 182.382 1041.91 181.942 1043.27 181.471C1043.3 183.828 1044.51 185.013 1046.91 185.013H1076.13C1078.56 185.013 1079.77 183.803 1079.77 181.388V140.193C1079.92 139.741 1080 139.206 1080 138.601V109.466V109.447Z'
          fill='black'
        />
        <path
          d='M406.087 106.535C405.428 105.146 404.067 104.286 402.527 104.286H375.74L375.612 104.121L385.998 64.2894C386.471 62.461 385.66 60.658 383.972 59.8043C382.285 58.9506 380.348 59.3519 379.147 60.8109L322.659 129.433C321.681 130.618 321.483 132.217 322.141 133.599C322.8 134.988 324.161 135.848 325.701 135.848H352.488L352.616 136.014L342.23 175.845C341.757 177.674 342.568 179.476 344.256 180.33C344.844 180.63 345.464 180.776 346.071 180.776C347.202 180.776 348.302 180.273 349.081 179.324L405.569 110.702C406.547 109.517 406.745 107.918 406.087 106.535Z'
          fill='white'
        />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_4_19'
          x1='364.027'
          y1='205.243'
          x2='364.027'
          y2='37.7219'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#FF0C1C' />
          <stop offset='1' stopColor='#FFAA00' />
        </linearGradient>
        <clipPath id='clip0_4_19'>
          <rect width='1080' height='290' fill='white' />
        </clipPath>
      </defs>
    </Icon>
  )
}

export default NostrCookingLogo