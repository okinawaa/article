import {
  CornerUpLeft,
  LucideIcon,
  LucideProps,
  MessageCircleMore,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  message: MessageCircleMore,
  cornerLeft: CornerUpLeft,
  sign: ({ fill = "#1D1D1F", ...props }: LucideProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M222.087 110.996C250.875 102.652 281.089 108.057 300.052 128.273C308.256 137.019 312.391 149.97 311.447 163.256C310.899 170.969 304.203 176.777 296.49 176.229C288.778 175.681 282.97 168.984 283.518 161.272C283.99 154.624 281.755 149.695 279.63 147.429C269.569 136.703 251.186 131.714 229.882 137.89C190.478 149.311 165.653 172.246 143.456 207.467C123.182 239.637 111.734 280.902 124.312 311.671C126.038 315.893 131.472 323.269 139.205 329.471C147.141 335.837 154.27 338.401 158.763 338.01C162.152 337.716 165.884 336.653 169.725 334.893C168.186 332.954 166.717 330.898 165.381 328.737C159.674 319.505 155.56 306.818 160.784 292.839C167.527 274.797 189.579 263.433 208.387 274.292C217.675 279.654 223.246 287.999 224.96 297.42C226.598 306.424 224.578 315.447 220.789 323.049C218.595 327.45 215.757 331.783 212.446 335.898C234.805 352.049 259.334 361.523 283.539 355.99C290.068 354.497 297.238 351.455 304.016 347.189C297.216 340.24 291.897 331.974 288.789 322.958C286.114 315.197 284.662 307.628 285.296 300.206C285.956 292.492 288.786 285.909 293.133 280.174C303.48 266.522 322.571 262.959 338.225 271.997C354.008 281.109 361.302 299.571 357.906 318.594C356.503 326.452 353.537 333.77 349.56 340.425C352.568 340.753 355.57 340.687 358.479 340.172C382.562 335.908 401.642 318.46 419.696 297.198C424.701 291.304 433.536 290.583 439.429 295.587C445.323 300.592 446.044 309.427 441.04 315.321C422.479 337.179 397.856 361.636 363.361 367.743C351.647 369.817 339.722 368.179 328.847 363.808C317.12 373.262 303.183 380.221 289.779 383.286C252.148 391.888 217.527 375.185 191.189 354.969C182.331 360.653 172 364.965 161.188 365.905C145.998 367.226 131.698 359.344 121.685 351.313C111.468 343.118 102.432 332.144 98.3944 322.266C80.7043 278.992 97.6907 227.569 119.768 192.538C144.518 153.265 174.355 124.831 222.087 110.996L225.883 124.092L222.087 110.996ZM324.335 327.952C327.435 323.26 329.494 318.423 330.342 313.673C331.996 304.406 328.255 298.572 324.225 296.246C320.066 293.845 316.77 295.342 315.447 297.088C313.959 299.052 313.358 300.682 313.195 302.591C313.006 304.793 313.339 308.258 315.261 313.835C317.068 319.077 320.269 323.893 324.335 327.952ZM191.478 317.264C193.222 314.979 194.658 312.708 195.729 310.559C197.47 307.066 197.733 304.197 197.412 302.431C197.167 301.083 196.537 299.782 194.387 298.541C193.63 298.103 192.471 297.886 190.888 298.55C189.249 299.237 187.744 300.684 187.012 302.641C185.857 305.732 186.213 309.186 189.198 314.015C189.875 315.11 190.642 316.195 191.478 317.264Z"
        fill={fill}
      />
    </svg>
  ),
}
