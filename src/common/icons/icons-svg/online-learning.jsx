import { h } from "preact";

const SVG = ({
  style = {},
  width = "100%",
  className = "",
  viewBox = "0 0 48 42",
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    className={`svg-icon ${className || ""}`}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M44.625 1.5H3.375C3.12875 1.49993 2.8849 1.54837 2.65738 1.64258C2.42986 1.73678 2.22313 1.87489 2.04901 2.04901C1.87489 2.22313 1.73678 2.42986 1.64258 2.65738C1.54837 2.8849 1.49993 3.12875 1.5 3.375V24.75H7.5V22.5C7.5 21.5054 7.89509 20.5516 8.59835 19.8484C9.30161 19.1451 10.2554 18.75 11.25 18.75H12.75V16.9378C12.0817 16.6451 11.513 16.1642 11.1134 15.5537C10.7139 14.9432 10.5007 14.2296 10.5 13.5V11.1562C10.5 11.1562 13.4541 11.895 17.8959 9.70781C17.9652 9.99802 18.0002 10.2954 18 10.5938V13.5C18.0001 14.2297 17.7873 14.9435 17.3876 15.554C16.988 16.1645 16.4188 16.6451 15.75 16.9369V18.75H17.25C18.2446 18.75 19.1984 19.1451 19.9016 19.8484C20.6049 20.5516 21 21.5054 21 22.5V24.75H46.5V3.375C46.5001 3.12875 46.4516 2.8849 46.3574 2.65738C46.2632 2.42986 46.1251 2.22313 45.951 2.04901C45.7769 1.87489 45.5701 1.73678 45.3426 1.64258C45.1151 1.54837 44.8713 1.49993 44.625 1.5ZM40.5 15.75H28.5L25.5 18.75V15.75H22.5V3.75H40.5V15.75Z'
      fill='#FF9D2A'
      fill-opacity='0.4'
    />
    <path
      d='M19.5 34.5L18 38.25H30L28.5 34.5H19.5Z'
      fill='#FF9D2A'
      fill-opacity='0.4'
    />
    <path
      d='M44.625 0.75H3.375C2.67904 0.750769 2.01181 1.02758 1.51969 1.51969C1.02758 2.01181 0.750769 2.67904 0.75 3.375V32.625C0.750769 33.321 1.02758 33.9882 1.51969 34.4803C2.01181 34.9724 2.67904 35.2492 3.375 35.25H18.3919L17.4919 37.5H14.25C14.0511 37.5 13.8603 37.579 13.7197 37.7197C13.579 37.8603 13.5 38.0511 13.5 38.25V40.5C13.5 40.6989 13.579 40.8897 13.7197 41.0303C13.8603 41.171 14.0511 41.25 14.25 41.25H33.75C33.9489 41.25 34.1397 41.171 34.2803 41.0303C34.421 40.8897 34.5 40.6989 34.5 40.5V38.25C34.5 38.0511 34.421 37.8603 34.2803 37.7197C34.1397 37.579 33.9489 37.5 33.75 37.5H30.5081L29.6081 35.25H44.625C45.321 35.2492 45.9882 34.9724 46.4803 34.4803C46.9724 33.9882 47.2492 33.321 47.25 32.625V3.375C47.2492 2.67904 46.9724 2.01181 46.4803 1.51969C45.9882 1.02758 45.321 0.750769 44.625 0.75ZM33 39V39.75H15V39H33ZM19.1081 37.5L20.0081 35.25H27.9919L28.8919 37.5H19.1081ZM45.75 32.625C45.7498 32.9233 45.6311 33.2093 45.4202 33.4202C45.2093 33.6311 44.9233 33.7498 44.625 33.75H3.375C3.07671 33.7498 2.7907 33.6311 2.57978 33.4202C2.36885 33.2093 2.25025 32.9233 2.25 32.625V31.5H45.75V32.625ZM45.75 30H2.25V25.5H45.75V30ZM11.8453 12.0262C13.0584 12.0262 14.9334 11.8069 17.25 10.8272V13.5C17.25 14.2956 16.9339 15.0587 16.3713 15.6213C15.8087 16.1839 15.0456 16.5 14.25 16.5C13.4544 16.5 12.6913 16.1839 12.1287 15.6213C11.5661 15.0587 11.25 14.2956 11.25 13.5V12.0075C11.4263 12.0188 11.6241 12.0262 11.8453 12.0262ZM11.25 10.5037V10.5C11.2509 9.70463 11.5673 8.94208 12.1297 8.37967C12.6921 7.81725 13.4546 7.50089 14.25 7.5C15.4359 7.5 16.4869 8.25375 16.9697 9.31312C15.1097 10.1419 13.5834 10.4166 12.5906 10.4963C12.1446 10.5334 11.6964 10.5359 11.25 10.5037ZM15 17.9363V18.75C15 18.9489 14.921 19.1397 14.7803 19.2803C14.6397 19.421 14.4489 19.5 14.25 19.5C14.0511 19.5 13.8603 19.421 13.7197 19.2803C13.579 19.1397 13.5 18.9489 13.5 18.75V17.9363C13.9964 18.0212 14.5036 18.0212 15 17.9363ZM14.25 21C14.7151 20.9994 15.1686 20.855 15.5483 20.5864C15.9279 20.3178 16.2152 19.9383 16.3706 19.5H17.25C18.0454 19.5009 18.8079 19.8172 19.3703 20.3797C19.9328 20.9421 20.2491 21.7046 20.25 22.5V24H18.75V23.25C18.75 23.0511 18.671 22.8603 18.5303 22.7197C18.3897 22.579 18.1989 22.5 18 22.5C17.8011 22.5 17.6103 22.579 17.4697 22.7197C17.329 22.8603 17.25 23.0511 17.25 23.25V24H11.25V23.25C11.25 23.0511 11.171 22.8603 11.0303 22.7197C10.8897 22.579 10.6989 22.5 10.5 22.5C10.3011 22.5 10.1103 22.579 9.96967 22.7197C9.82902 22.8603 9.75 23.0511 9.75 23.25V24H8.25V22.5C8.25089 21.7046 8.56725 20.9421 9.12967 20.3797C9.69208 19.8172 10.4546 19.5009 11.25 19.5H12.1294C12.2848 19.9383 12.5721 20.3178 12.9517 20.5864C13.3314 20.855 13.7849 20.9994 14.25 21ZM45.75 24H21.75V22.5C21.7487 21.3069 21.2742 20.1631 20.4306 19.3194C19.5869 18.4758 18.4431 18.0013 17.25 18H16.5V17.3944C17.1836 16.9996 17.7514 16.4319 18.1463 15.7484C18.5412 15.0648 18.7494 14.2894 18.75 13.5V10.5C18.75 10.4784 18.7491 10.4578 18.7472 10.4363C18.7083 9.28863 18.2426 8.19681 17.4412 7.37438C17.0301 6.94118 16.5352 6.596 15.9866 6.35975C15.4381 6.12351 14.8473 6.00112 14.25 6C13.0569 6.00127 11.9131 6.47578 11.0694 7.31942C10.2258 8.16306 9.75127 9.30691 9.75 10.5V13.5C9.75059 14.2894 9.9588 15.0648 10.3537 15.7484C10.7486 16.4319 11.3164 16.9996 12 17.3944V18H11.25C10.0569 18.0013 8.91306 18.4758 8.06942 19.3194C7.22578 20.1631 6.75127 21.3069 6.75 22.5V24H2.25V3.375C2.25025 3.07671 2.36885 2.7907 2.57978 2.57978C2.7907 2.36885 3.07671 2.25025 3.375 2.25H44.625C44.9233 2.25025 45.2093 2.36885 45.4202 2.57978C45.6311 2.7907 45.7498 3.07671 45.75 3.375V24Z'
      fill='#FF9D2A'
    />
    <path
      d='M22.5 16.5H24.75V18.75C24.75 18.8983 24.794 19.0434 24.8764 19.1667C24.9588 19.29 25.0759 19.3862 25.213 19.4429C25.35 19.4997 25.5008 19.5146 25.6463 19.4856C25.7918 19.4567 25.9255 19.3852 26.0303 19.2803L28.8106 16.5H40.5C40.6989 16.5 40.8897 16.421 41.0303 16.2803C41.171 16.1397 41.25 15.9489 41.25 15.75V3.75C41.25 3.55109 41.171 3.36032 41.0303 3.21967C40.8897 3.07902 40.6989 3 40.5 3H22.5C22.3011 3 22.1103 3.07902 21.9697 3.21967C21.829 3.36032 21.75 3.55109 21.75 3.75V15.75C21.75 15.9489 21.829 16.1397 21.9697 16.2803C22.1103 16.421 22.3011 16.5 22.5 16.5ZM23.25 4.5H39.75V15H28.5C28.4015 15 28.304 15.0194 28.213 15.0571C28.122 15.0948 28.0393 15.15 27.9697 15.2197L26.25 16.9393V15.75C26.25 15.5511 26.171 15.3603 26.0303 15.2197C25.8897 15.079 25.6989 15 25.5 15H23.25V4.5Z'
      fill='#FF9D2A'
    />
    <path
      d='M34.5 27H18.75C18.75 26.8011 18.671 26.6103 18.5303 26.4697C18.3897 26.329 18.1989 26.25 18 26.25C17.8011 26.25 17.6103 26.329 17.4697 26.4697C17.329 26.6103 17.25 26.8011 17.25 27H13.5C13.3011 27 13.1103 27.079 12.9697 27.2197C12.829 27.3603 12.75 27.5511 12.75 27.75C12.75 27.9489 12.829 28.1397 12.9697 28.2803C13.1103 28.421 13.3011 28.5 13.5 28.5H17.25C17.25 28.6989 17.329 28.8897 17.4697 29.0303C17.6103 29.171 17.8011 29.25 18 29.25C18.1989 29.25 18.3897 29.171 18.5303 29.0303C18.671 28.8897 18.75 28.6989 18.75 28.5H34.5C34.6989 28.5 34.8897 28.421 35.0303 28.2803C35.171 28.1397 35.25 27.9489 35.25 27.75C35.25 27.5511 35.171 27.3603 35.0303 27.2197C34.8897 27.079 34.6989 27 34.5 27Z'
      fill='#FF9D2A'
    />
  </svg>
);

export default SVG;