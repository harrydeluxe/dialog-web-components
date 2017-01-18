/**
 * Copyright 2017 dialog LLC <info@dlg.im>
 * @flow
 */

/* eslint-disable */
/* eslint max-lines: 0 */

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './Icon.css';

export type Props = {
  className?: string,
  glyph: string,
  theme: 'default' | 'primary' | 'success' | 'danger' | 'info' | 'warning',
  size: 'small' | 'normal' | 'large',
  inverted: boolean,
  onClick?: (event: SyntheticMouseEvent) => void
};

class Icon extends PureComponent {
  props: Props;

  static defaultProps = {
    size: 'normal',
    theme: 'default',
    inverted: false
  };

  renderMaterialIcon() {
    const { glyph } = this.props;
    const className = classNames('material-icons', styles.material);

    return (
      <i className={className}>{glyph}</i>
    );
  }

  renderSvgIcon() {
    const { glyph } = this.props;

    switch (glyph) {
      case 'apple':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g transform="translate(2.000000, 1.000000)" className={styles.svgFill}>
              <path d="M24.3496597,9.88322937 C22.7905668,7.61011118 20.3740244,7.29953079 19.5248295,7.27476691 C17.4952228,7.0611784 15.526494,8.48922907 14.4926018,8.48922907 C13.4380731,8.48922907 11.8459616,7.29540348 10.1300309,7.33048564 C7.92191781,7.36453599 5.85619712,8.64297153 4.7232494,10.6282096 C2.38512598,14.6760728 4.12891617,20.6245643 6.36901589,23.8964925 C7.48958166,25.4989222 8.79897205,27.2881128 10.5128392,27.2241395 C12.1895606,27.1560388 12.8158805,26.1561969 14.8392962,26.1561969 C16.844139,26.1561969 17.4322813,27.2241395 19.1801988,27.1838982 C20.9797077,27.1560388 22.1126554,25.5752775 23.1940117,23.9573704 C24.4889565,22.1217475 25.0089981,20.3119202 25.0296346,20.2190557 C24.9883615,20.2056419 21.5358633,18.8869651 21.5007811,14.9020433 C21.4708581,11.57646 24.2237766,9.95855289 24.3496597,9.88322937 L24.3496597,9.88322937 Z M17.0495121,5.12237262 C17.9513301,3.99458405 18.5683636,2.46025505 18.3970801,0.903225806 C17.091817,0.961008205 15.4594642,1.80607576 14.5194685,2.90910045 C13.6878147,3.88108291 12.9448982,5.47422614 13.1368183,6.97244115 C14.6030466,7.08181497 16.1084845,6.2326201 17.0495121,5.12237262 L17.0495121,5.12237262 Z" />
            </g>
          </svg>
        );
      case 'logo':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <path
              d="M7.39664743,5.39698047 C11.9259548,0.867673177 19.2692052,0.867673177 23.7985125,5.39698047 C28.3278197,9.92673181 28.3278197,17.2690942 23.7985125,21.7984014 L15.597358,30 L15.597358,25.195382 C12.6293295,25.195382 9.66130108,24.0630551 7.39664743,21.7984014 C2.86778419,17.2699822 2.86778419,9.92673181 7.39664743,5.39698047"
              transform="translate(0, 2)"
              className={styles.svgFill}
            />
          </svg>
        );
      case 'call':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g transform="translate(3.000000, 2.000000)" className={styles.svgFill}>
              <path d="M14.5022222,22.4325926 L18.0812721,24.1988748 C18.4412722,23.8388749 18.3288889,19.0192593 18.7955555,19.1792592 C20.2888889,19.6725926 21.9022222,19.9392593 23.5555555,19.9392593 C24.2888889,19.9392593 24.8888889,20.5392593 24.8888889,21.2725925 L23.7336158,25.1560689 C23.7336158,25.8894022 23.7153216,25.925927 22.9819883,25.925927 C22.1906867,25.925927 21.9824331,27.2187272 21.2120552,27.1396256 C10.8614636,26.0768378 2.57657017,18.0515217 1.11734745,7.82364991 C0.966784643,6.76833663 1.29709201,5.68111108 1.29709201,4.58412904 C1.29709201,4.31698114 1.21719272,4.95890428 1.67005603,5.87225504 C1.75273533,6.03900559 1.83956642,6.21508542 1.92930945,6.39671722 C2.69735047,7.95116312 3.6786707,9.91225407 4.09608289,9.91225407 L5.71555555,13.6459259 C7.63555551,17.4192593 10.7288889,20.4992593 14.5022222,22.4325926 L14.5022222,22.4325926 Z" />
              <path d="M6.36724192,11.61131 C9.68095043,11.61131 11.5578345,7.77602359 11.0147028,4.63588687 C10.4715713,1.49575014 8.49777569,0.604962379 5.1886936,0.604962379 C1.87961152,0.604962379 0.594292533,4.28058088 1.0985243,7.45310692 C1.60275608,10.625633 3.05353341,11.61131 6.36724192,11.61131 L6.36724192,11.61131 Z" />
              <path d="M21.1910435,27.1633757 C24.5047521,27.1633757 26.3606638,24.0996903 25.7553585,20.61206 C25.1500531,17.1244298 22.7777379,16.8106279 19.9667028,16.5964353 C17.1556676,16.3822425 15.3141961,19.4608557 15.8184279,22.6333817 C16.3226597,25.8059078 17.877335,27.1633757 21.1910435,27.1633757 L21.1910435,27.1633757 Z" transform="translate(20.802145, 21.874624) scale(-1, -1) translate(-20.802145, -21.874624)" />
            </g>
          </svg>
        );
      case 'call_end':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g
              transform="translate(16.286929, 17.286929) rotate(133.000000) translate(-16.286929, -17.286929) translate(1.786929, 2.786929)"
              className={styles.svgFill}
            >
              <path d="M15.9620833,22.2091667 L19.2055973,23.80986 C19.5318473,23.48361 19.43,19.1158333 19.8529167,19.2608333 C21.20625,19.7079167 22.6683333,19.9495833 24.1666667,19.9495833 C24.83125,19.9495833 25.375,20.4933333 25.375,21.1579167 L24.3280338,24.6773171 C24.3280338,25.3419004 24.3114546,25.3750009 23.6468713,25.3750009 C22.9297543,25.3750009 22.7410244,26.5466011 22.0428695,26.4749153 C12.6626459,25.5117639 5.15446117,18.2388212 3.83204057,8.96981236 C3.69559302,8.0134347 3.99493408,7.02813655 3.99493408,6.03399658 C3.99493408,5.79189379 3.92252535,6.37363664 4.33293272,7.20136077 C4.40786083,7.35247844 4.48655151,7.51205078 4.56788113,7.67665461 C5.26391831,9.08537121 6.15323976,10.8626098 6.53151957,10.8626098 L7.99916667,14.24625 C9.73916667,17.6658333 12.5425,20.4570833 15.9620833,22.2091667 Z" />
              <path d="M8.58975743,12.4023794 C11.5928058,12.4023794 13.2937319,8.926651 12.8015189,6.0809021 C12.3093059,3.2351532 10.5205536,2.42787679 7.52169802,2.42787679 C4.52284239,2.42787679 3.35802206,5.75890605 3.8149821,8.63400777 C4.27194214,11.5091095 5.5867091,12.4023794 8.58975743,12.4023794 Z" />
              <path d="M22.0041232,26.4710042 C25.0071715,26.4710042 26.6890915,23.6945393 26.1405336,20.5338744 C25.5919756,17.3732095 24.2090365,17.1143443 21.6615358,16.9202322 C19.1140352,16.72612 16.6782302,19.4905954 17.1351903,22.3656972 C17.5921503,25.2407989 19.0010749,26.4710042 22.0041232,26.4710042 Z" transform="translate(21.661536, 21.690791) scale(-1, -1) translate(-21.661536, -21.690791)" />
            </g>
          </svg>
        );
      case 'minimize':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g transform="translate(1.000000, 1.000000)" className={styles.svgFill}>
              <g>
                <path d="M7,8.5 C7,7.67157288 7.67154063,7 8.50643854,7 L16.4935615,7 C17.3255445,7 18,7.66579723 18,8.5 L18,8.5 C18,9.32842712 17.3284594,10 16.4935615,10 L8.50643854,10 C7.67445551,10 7,9.33420277 7,8.5 L7,8.5 Z" transform="translate(12.500000, 8.500000) scale(-1, 1) rotate(90.000000) translate(-12.500000, -8.500000)" />
                <path d="M3,12.5 C3,11.6715729 3.67154063,11 4.50643854,11 L12.4935615,11 C13.3255445,11 14,11.6657972 14,12.5 L14,12.5 C14,13.3284271 13.3284594,14 12.4935615,14 L4.50643854,14 C3.67445551,14 3,13.3342028 3,12.5 L3,12.5 Z" transform="translate(8.500000, 12.500000) scale(-1, 1) translate(-8.500000, -12.500000)" />
                <path d="M-1.34314575,6.36291759 C-1.34314575,5.81120912 -0.904105188,5.36396103 -0.341071989,5.36396103 L14.0689941,5.36396103 C14.6224241,5.36396103 15.0710678,5.80662136 15.0710678,6.36291759 L15.0710678,7.36500447 C15.0710678,7.91671294 14.6320272,8.36396103 14.0689941,8.36396103 L-0.341071991,8.36396103 C-0.894502047,8.36396103 -1.34314575,7.9213007 -1.34314575,7.36500447 L-1.34314575,6.36291759 Z" transform="translate(6.863961, 6.863961) scale(-1, 1) rotate(-45.000000) translate(-6.863961, -6.863961)" />
              </g>
              <g transform="translate(23.000000, 23.000000) scale(-1, -1) translate(-23.000000, -23.000000) translate(16.000000, 16.000000)">
                <path d="M7,8.5 C7,7.67157288 7.67154063,7 8.50643854,7 L16.4935615,7 C17.3255445,7 18,7.66579723 18,8.5 L18,8.5 C18,9.32842712 17.3284594,10 16.4935615,10 L8.50643854,10 C7.67445551,10 7,9.33420277 7,8.5 L7,8.5 Z" transform="translate(12.500000, 8.500000) scale(-1, 1) rotate(90.000000) translate(-12.500000, -8.500000)" />
                <path d="M3,12.5 C3,11.6715729 3.67154063,11 4.50643854,11 L12.4935615,11 C13.3255445,11 14,11.6657972 14,12.5 L14,12.5 C14,13.3284271 13.3284594,14 12.4935615,14 L4.50643854,14 C3.67445551,14 3,13.3342028 3,12.5 L3,12.5 Z" transform="translate(8.500000, 12.500000) scale(-1, 1) translate(-8.500000, -12.500000)" />
                <path d="M-1.34314575,6.36291759 C-1.34314575,5.81120912 -0.904105188,5.36396103 -0.341071989,5.36396103 L14.0689941,5.36396103 C14.6224241,5.36396103 15.0710678,5.80662136 15.0710678,6.36291759 L15.0710678,7.36500447 C15.0710678,7.91671294 14.6320272,8.36396103 14.0689941,8.36396103 L-0.341071991,8.36396103 C-0.894502047,8.36396103 -1.34314575,7.9213007 -1.34314575,7.36500447 L-1.34314575,6.36291759 Z" transform="translate(6.863961, 6.863961) scale(-1, 1) rotate(-45.000000) translate(-6.863961, -6.863961)" />
              </g>
            </g>
          </svg>
        );
      // case 'mic_off':
      //   return (
      //     <svg viewBox="0 0 32 32" className={styles.svg}>
      //       <g>
      //         <path d="M26.5789474,15.2631579 L24.0736842,15.2631579 C24.0736842,16.3610526 23.8452632,17.3778947 23.4326316,18.2842105 L25.2452632,20.0968421 C26.0852632,18.66 26.5789474,17.0168421 26.5789474,15.2631579 L26.5789474,15.2631579 Z" />
      //         <path d="M20.6621053,15.5063158 C20.6621053,15.4252632 20.6842105,15.3442105 20.6842105,15.2631579 L20.6842105,6.42105263 C20.6842105,3.97473684 18.7021053,2 16.2631579,2 C13.8242105,2 11.8421053,3.97473684 11.8421053,6.42105263 L11.8421053,6.69368421 L20.6621053,15.5063158 L20.6621053,15.5063158 Z" />
      //         <path d="M4.87894737,3.47368421 L3,5.35263158 L11.8568421,14.2094737 L11.8568421,15.2705263 C11.8568421,17.7094737 13.8242105,19.6915789 16.2631579,19.6915789 C16.5947368,19.6915789 16.9115789,19.6473684 17.2210526,19.5810526 L19.6673684,22.0273684 C18.6136842,22.5136842 17.4568421,22.7863158 16.2631579,22.7863158 C12.1957895,22.7863158 8.45263158,19.6915789 8.45263158,15.2705263 L5.94736842,15.2705263 C5.94736842,20.3031579 9.95578947,24.4589474 14.7894737,25.1736842 L14.7894737,30 L17.7368421,30 L17.7368421,25.1663158 C19.0705263,24.9673684 20.3378947,24.5031579 21.48,23.8326316 L27.6473684,30 L29.5263158,28.1284211 L4.87894737,3.47368421 L4.87894737,3.47368421 Z" />
      //       </g>
      //     </svg>
      //   );
      case 'phone_outline':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g
              transform="translate(15.742962, 15.670769) rotate(-4.000000) translate(-15.742962, -15.670769) translate(5.742962, 4.670769) scale(1.075)"
              strokeWidth="2"
              className={styles.svgStroke}
            >
              <path d="M0.205017808,4.14435086 C-0.0714355545,7.11010471 0.953179573,12.1982164 4.46555894,16.0472466 C7.9779383,19.8962769 11.3296583,21.2620565 15.145347,21.6877753" />
              <path d="M4.24641827,9.24821777 C6.29343688,9.24821777 8.59589844,8.12081028 8.59589844,4.97797445 C8.59589844,1.83513862 6.16958582,0.135217285 4.24641831,0.135217285 C2.3232508,0.135217285 0.194117647,1.33352421 0.194117647,4.30358887 C0.194117647,7.27365352 2.19939966,9.24821777 4.24641827,9.24821777 Z" transform="translate(4.395008, 4.691718) scale(-1, -1) translate(-4.395008, -4.691718)" />
              <path d="M15.0764706,21.7338372 C17.1554946,21.9113519 19.5982996,20.9286954 19.5982996,17.7858596 C19.5982996,14.6430238 16.9996381,13.2169825 15.0764706,13.2169825 C13.1533031,13.2169825 11.1941176,14.5839698 11.1941176,17.2503159 C11.1941176,19.9166619 12.9974466,21.5563226 15.0764706,21.7338372 Z" transform="translate(15.396209, 17.485382) scale(-1, -1) translate(-15.396209, -17.485382)" />
            </g>
          </svg>
        );
      case 'more':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g transform="translate(7.000000, 14.000000)" className={styles.svgFill}>
              <circle cx="2.5" cy="2.5" r="2.5" />
              <circle cx="9.5" cy="2.5" r="2.5" />
              <circle cx="16.5" cy="2.5" r="2.5" />
            </g>
          </svg>
        );
      case 'link':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g transform="scale(1.05)" className={styles.svgFill}>
              <path d="M5.1347326,15.7716698 C5.1347326,14.033804 6.54300316,12.6255335 8.28086896,12.6255335 L14.2735096,12.6255335 L14.2735096,9.77902913 L8.28086896,9.77902913 C4.96993498,9.77902913 2.28822827,12.4607358 2.28822827,15.7716698 C2.28822827,19.0826038 4.96993498,21.7643105 8.28086896,21.7643105 L14.2735096,21.7643105 L14.2735096,18.9178062 L8.28086896,18.9178062 C6.54300316,18.9178062 5.1347326,17.5095356 5.1347326,15.7716698 L5.1347326,15.7716698 Z M23.2624707,9.77902913 L17.26983,9.77902913 L17.26983,12.6255335 L23.2624707,12.6255335 C25.0003365,12.6255335 26.408607,14.033804 26.408607,15.7716698 C26.408607,17.5095356 25.0003365,18.9178062 23.2624707,18.9178062 L17.26983,18.9178062 L17.26983,21.7643105 L23.2624707,21.7643105 C26.5734047,21.7643105 29.2551114,19.0826038 29.2551114,15.7716698 C29.2551114,12.4607358 26.5734047,9.77902913 23.2624707,9.77902913 L23.2624707,9.77902913 Z M11.2771893,17.26983 L20.2661503,17.26983 L20.2661503,14.2735096 L11.2771893,14.2735096 L11.2771893,17.26983 L11.2771893,17.26983 Z" transform="translate(15.771670, 15.771670) scale(-1, 1) rotate(45.000000) translate(-15.771670, -15.771670)" />
            </g>
          </svg>

        );
      case 'emoji_smile':
        return (
          <svg viewBox="0 0 24 24" className={styles.svg}>
            <g fillRule="evenodd" transform="translate(2 3) scale(1.1)" >
              <path
                d="M9 12.6c-2.5 0-3.7-.8-4.2-1.6.4.2 1.5.4 4 .4 2.8 0 4-.2 4.2-.4-.4.8-1.6 1.6-4 1.6m4.2-2.4c-.4 0-1 .4-4.2.4-3.3 0-3.8-.4-4.2-.4-.7-.2-.7.2-.7.4 0 2.3 2.5 4 5 4s5-1.7 5-4c0-.2 0-.6-.6-.4M12 4.8c.8 0 1.5.8 1.5 1.7 0 1-.7 1.8-1.5 1.8s-1.4-.8-1.4-1.8.6-1.7 1.4-1.7m-6 0c.8 0 1.4.8 1.4 1.7 0 1-.6 1.8-1.4 1.8-.8 0-1.5-.8-1.5-1.8S5.2 4.8 6 4.8"
                className={styles.svgFill}
              />
              <circle
                cx="9" cy="9" r="9" strokeWidth="1.8"
                className={styles.svgStroke}
              />
            </g>
          </svg>
        );
      case 'add_member':
        return (
          <svg viewBox="0 0 36 36" className={styles.svg}>
            <g transform="translate(2 7) scale(1.1)">
              <g className={styles.svgFill}>
                <rect
                  width="2"
                  height="12"
                  x="23"
                  y="3"
                  rx="1"
                />
                <rect
                  width="2"
                  height="12"
                  x="23"
                  y="3"
                  transform="rotate(90 24 9)"
                  rx="1"
                />
              </g>
              <g className={styles.svgStroke}>
                <path d="M18 20c0-4.741-4.0294-7-9-7s-9 2.259-9 7h18z" strokeLinejoin="round" strokeWidth="2" />
                <rect
                  width="8"
                  height="11"
                  x="5"
                  rx="4"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </g>
          </svg>
        );
      case 'more_outline':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g
              strokeWidth="2"
              transform="translate(4 14)"
              className={styles.svgStroke}
            >
              <circle cx="2" cy="2" r="3" />
              <circle cx="12" cy="2" r="3" />
              <circle cx="22" cy="2" r="3" />
            </g>
          </svg>
        );
      case 'arrow_up':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <g className={styles.svgFill}>
              <path d="M15 3.3294c0-.4368.355-.791.8-.791.4418 0 .8.36.8.791V30.209c0 .437-.355.791-.8.791-.4418 0-.8-.36-.8-.791V3.3295z" />
              <path d="M15.0434 1.8662c.311-.3707.817-.364 1.1216.005l.0268.0324c.3084.3734.302.9764-.0175 1.3502L5.0468 16.2808c-.318.3724-.885.4147-1.246.1118l.1148.0963c-.3702-.311-.412-.87-.107-1.234L15.0434 1.866z" />
              <path d="M16.691 1.9278c-.319-.3804-.827-.3643-1.1264.025l-.0264.0343c-.303.3946-.282 1.025.0408 1.4017L26.622 16.267c.3256.3798.8988.428 1.274.1132l-.1433.1203c.378-.3172.427-.881.1066-1.263L16.691 1.9278z" />
            </g>
          </svg>
        );
      case 'favourite':
        return (
          <svg viewBox="0 0 32 32" className={styles.svg}>
            <path className={styles.svgFill} d="M20.148 12.0183l-2.919-6.8768c-.6476-1.5255-1.699-1.52-2.345.0042l-2.919 6.887-7.483.635c-1.649.14-1.971 1.1325-.7183 2.2176L9.446 19.808l-1.7067 7.3164c-.3762 1.6123.477 2.2206 1.8854 1.3704l6.4317-3.882 6.4318 3.882c1.4174.8555 2.261.2318 1.8896-1.3704l-1.6964-7.3164 5.672-4.9227c1.25-1.085.916-2.0805-.7226-2.2218l-7.483-.6453zM16.0563 21.89l-5.4746 3.3053 1.456-6.2318-4.834-4.1934 6.3774-.5532 2.4752-5.8677 2.49 5.8824 6.3772.5533-4.834 4.1933 1.456 6.2318-5.4892-3.3197z" />
          </svg>
        );
      case 'windows':
        return (
          <svg viewBox="0 0 88 88" className={styles.svg}>
            <g className={styles.svgFill} transform="scale(0.8), translate(8, 14)">
              <path d="M0 12.402l35.687-4.86.016 34.423-35.67.203zm35.67 33.53l.028 34.452L.028 75.48.026 45.7zm4.326-39.026L87.314 0v41.527l-47.318.376zm47.33 39.35l-.012 41.34-47.318-6.68-.066-34.738z" />
            </g>
          </svg>
        );
      case 'tux':
        return (
          <svg viewBox="-4 7 28 8" className={styles.svg}>
            <g className={styles.svgFill}>
              <path d="M19.434 19.103c-.62-.254-1.13-.654-1.092-1.42.036-.765-.547-1.272-.547-1.272s.51-1.674.036-3.057c-.472-1.385-2.037-3.604-3.238-5.278-1.2-1.675-.18-3.605-1.272-6.08C12.227-.477 9.39-.332 7.86.724c-1.53 1.054-1.057 3.674-.985 4.914.073 1.236.033 2.117-.108 2.437-.144.32-1.128 1.494-1.784 2.476-.655.982-1.128 3.02-1.603 3.858-.473.837-.145 1.6-.145 1.6s-.328.11-.583.658c-.255.544-.764.8-1.674.98-.91.18-.91.766-.692 1.42.22.655 0 1.02-.254 1.856s1.02 1.092 2.256 1.235c1.238.147 2.62.948 3.787 1.093 1.163.146 1.528-.8 1.528-.8s1.31-.293 2.692-.327c1.384-.037 2.692.29 2.692.29s.255.583.728.837c.474.255 1.493.292 2.148-.398.656-.693 2.403-1.565 3.385-2.112.985-.548.805-1.384.186-1.637zm-8.518-16.05c.624 0 1.128.618 1.128 1.38 0 .543-.253 1.01-.622 1.237l-.298-.128c.222-.11.38-.393.38-.723 0-.43-.266-.78-.595-.78-.326 0-.593.35-.593.78 0 .158.038.31.103.436-.194-.077-.373-.15-.513-.202-.076-.186-.12-.396-.12-.62 0-.763.505-1.382 1.13-1.382zm-.08 2.913c.31.108.658.31.622.512-.037.202-.2.202-.623.46-.423.256-1.34.824-1.632.86-.295.038-.46-.127-.77-.328-.313-.202-.9-.68-.752-.936 0 0 .458-.35.66-.533.2-.183.715-.622 1.027-.565.312.053 1.156.42 1.468.53zM8.02 3.27c.492 0 .892.587.892 1.31 0 .133-.013.256-.038.375-.12.04-.242.107-.36.207-.06.05-.113.095-.164.14.078-.145.11-.353.074-.572-.066-.395-.33-.683-.59-.642-.26.045-.417.4-.35.797.066.397.328.685.588.642.015-.003.03-.007.044-.012-.127.122-.244.227-.363.316-.36-.166-.624-.663-.624-1.25 0-.724.4-1.31.892-1.31zm-.96 18.392c-.117.522-.728.9-.728.9-.554.175-2.094-.493-2.792-.786-.697-.29-2.472-.38-2.705-.637-.23-.265.116-.846.205-1.397.086-.555-.174-.902-.088-1.28.088-.378 1.222-.378 1.657-.64.438-.262.525-1.018.874-1.22.35-.206.988.52 1.25.93.26.405 1.25 2.15 1.657 2.587.41.436.787 1.02.67 1.542zm6.436-5.072c-.105.513-.105 2.367-.105 2.367s-1.128 1.563-2.877 1.82c-1.747.255-2.62.07-2.62.07l-.983-1.126s.763-.11.655-.874c-.11-.764-2.33-1.82-2.73-2.767-.4-.946-.072-2.55.438-3.35.51-.8.835-2.546 1.345-3.13.51-.58.91-1.818.728-2.365 0 0 1.092 1.31 1.855 1.094.764-.22 2.477-1.495 2.73-1.275.254.22 2.438 5.022 2.655 6.55.22 1.53-.146 2.693-.146 2.693s-.836-.218-.944.292zm5.586 3.43c-.34.31-2.232 1.075-2.8 1.67-.563.592-1.3 1.073-1.75.933-.455-.143-.85-.764-.652-1.67.197-.903.368-1.893.34-2.46s-.143-1.33 0-1.443c.14-.11.366-.055.366-.055s-.11 1.073.538 1.358c.65.28 1.583-.113 1.866-.398.284-.28.482-.705.482-.705s.282.143.254.594c-.028.452.197 1.104.623 1.33.424.222 1.074.535.734.845z" />
            </g>
          </svg>
        );
      case 'plus_outline':
        return (
          <svg viewBox="0 0 24 24" className={styles.svg}>
            <circle
              className={styles.svgStroke}
              cx="12"
              cy="12"
              r="10"
              strokeWidth="2"
            />
            <g className={styles.svgFill}>
              <rect
                width="2"
                height="12"
                x="11"
                y="6"
                rx="2"
              />
              <rect
                width="2"
                height="12"
                x="11"
                y="6"
                transform="rotate(90 12 12)"
                rx="2"
              />
            </g>
          </svg>
        );
      case 'finder':
        return (
          <svg viewBox="0 0 24 24" className={styles.svg}>
            <g className={styles.svgFill} transform="translate(0, 0.5)">
              <path d="M22.5 20.5h-21c-.276 0-.5-.224-.5-.5V3c0-.276.224-.5.5-.5h21c.276 0 .5.224.5.5v17c0 .276-.224.5-.5.5zM2 19.5h20v-16H2v16z" />
              <path d="M14.5 23.5c-.128 0-.256-.05-.354-.146-1.173-1.173-1.47-7.237-.835-9.854H10c-.276 0-.5-.224-.5-.5 0-4.254 2.812-10.52 4.646-12.354.195-.195.512-.195.707 0s.195.512 0 .707c-1.61 1.61-4.135 7.202-4.34 11.146H14c.17 0 .33.086.422.23.092.145.104.326.03.48-.875 1.872-.436 8.597.402 9.435.195.195.195.512 0 .707-.098.1-.226.148-.354.148z" />
              <path d="M12 17.5c-1.454 0-4.102-.402-7.172-1.53-.26-.096-.392-.383-.297-.643.096-.26.384-.39.643-.297 2.95 1.085 5.52 1.47 6.827 1.47s3.877-.385 6.828-1.47c.26-.093.547.04.642.298.095.26-.038.546-.297.642-3.07 1.128-5.72 1.53-7.173 1.53zM7.5 8.5c-.276 0-.5-.224-.5-.5V6c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .276-.224.5-.5.5zM15.5 8.5c-.276 0-.5-.224-.5-.5V6c0-.276.224-.5.5-.5s.5.224.5.5v2c0 .276-.224.5-.5.5z" />
            </g>
          </svg>
        );
      case 'emoji_nature':
        return (
          <svg viewBox="2 1 20 21" className={styles.svg}>
            <path strokeWidth="1.8" d="M10 21h4v-4l6 .2-5.2-6.8h4L12 3l-6.6 7.4h3.8L4 17h6z" className={styles.svgStroke} />
          </svg>
        );
      case 'emoji_food':
        return (
          <svg className={styles.svg} viewBox="2 2 20 21">
            <g fillRule="evenodd">
              <path className={styles.svgStroke} strokeWidth="1.8" d="M3.039 7.212l9.007.038-.4128 3.643s7.1496-.6437 8.3506 2.4664c.0146.3318.241.1608 0 1.1306-.2412.97-1.201.653-1.201.653H7.2048l-.4994 6.0713H4.6152L3.039 7.212z" />
              <path className={styles.svgStroke} strokeWidth="1.4" d="M9.1304 7.174L10.2187 3l3.2276 1.2143" />
              <path className={styles.svgStroke} strokeWidth="1.8" d="M20.0572 14.8772s.735 1.1384.735 2.163c0 1.0245-.35 1.7076-.35 1.7076s.14.607.14 1.29c0 .6832-.175 1.1765-1.19 1.1765H7.4212s-.6073-.6298-.6828-1.1764c-.0124-.09 0-.733 0-.733l.2638-2.038v-.948l.7-1.7087s-.525-.3415-.525-1.1763c0-.835 2.45-2.5044 4.9-2.6562" />
              <path className={styles.svgFill} d="M6.0352 14.9223c-.209.3302-.3503.6676-.3864 1.0165-.0057.055-.0086.11-.0086.1646 0 1.1184.5473 2.3 2.1748 2.3.1938 0 .518.0043 1.079.014.092.0016 1.3387.024 1.768.031 1.1867.02 2.19.0334 3.154.0403 3.3186.024 5.42-.0314 6.1553-.2173.3447-.087.6173-.17.8383-.2557.8673-.337 1.0816-.7432 1.0804-1.6142v-.0472c0-.8487-.5006-1.5235-1.2617-1.997-.373-.232-2.364-.2964-6.8602-.337-2.021-.018-4.075-.0224-6.073-.0195-.118.0002.188-.288.16-.288-.375 0-.722.1444-1.048.3753-.18.128-.318.255-.405.35-.096.103-.2303.271-.366.485zm1.64 1.2308c.1345-.061.2583-.094.3382-.094.0273 0 .2833-.058.3936-.058 1.876-.002 3.8044.001 5.702.012 1.6586.01 3.0517.025 4.0947.047.5867.012 1.054.0263 1.3892.042.17.008.303.0168.396.025.028.0028.055.007-.009-.0186.415.166.649.369.649.5827v.0296c.0004.2488-.324-.6935-.6494-.6123-.159.0396-1.053.566-1.3365.612-.155.025-1.4003.318-3.531.308-.903-.004-1.7454.0754-2.994 0-2.3782-.1434-3.738-.8626-3.9294-.8626-.9674 0-1.13.8216-1.13.6058 0-.007.0007-.015.002-.023.0126-.078.081-.1834.1915-.2954.0846-.086.1696-.1536.218-.187.035-.0246.1086-.068.204-.1117z" />
            </g>
          </svg>
        );
      case 'emoji_party':
        return (
          <svg className={styles.svg} viewBox="2 1 21 22">
            <g fill="none" fillRule="evenodd" transform="translate(3 2)" className={styles.svgStroke}>
              <path strokeWidth="1.8" d="M.713 18.671S4.1657 8.1206 5.2917 6.3386c4.541 0 7.0178 5.8423 6.6802 7.134C11.033 14.5336.713 18.671.713 18.671z" />
              <path strokeWidth="1.8" d="M4.7662 7.3616s-.0375 1.7455 2.402 4.174c2.4393 2.4287 5.0288 1.8974 5.0288 1.8974" />
              <path strokeWidth="1.2" d="M5.104 3.9844S5.667 2.3147 6.4175 2.77c.7506.4554 2.9273 3.2255 0 7.5514" />
              <path strokeWidth=".9" d="M16.7005 10.018s-2.6646-.4555-4.8037.1137c-2.1392.5692-3.34 2.2768-3.34 2.2768" />
              <ellipse cx="10.2079" cy="2.4286" rx=".6005" ry=".6071" />
              <ellipse cx="13.2103" cy="1.2143" rx=".6005" ry=".6071" />
              <ellipse cx="18.014" cy="12.1429" rx=".6005" ry=".6071" />
              <ellipse cx="15.6121" cy="13.9643" rx=".6005" ry=".6071" />
              <ellipse cx="16.8131" cy="17.6071" rx=".6005" ry=".6071" />
              <ellipse cx="12.0093" cy="16.3929" rx=".6005" ry=".6071" />
              <ellipse cx=".6005" cy="9.1071" rx=".6005" ry=".6071" />
              <path d="M1.0133.1897S-.0375.9487.1876 1.48c.2252.5312 1.764.9106 1.764 1.404 0 .4932-1.6138.7968-1.276 1.328.3377.5313 2.214-.2276 2.477.4554.2626.683-.7883 1.7835-.7883 1.7835M17.811 1.667s.779 1.3135.2836 1.7696c-.4953.456-2.3416.1173-2.575.6417-.2336.5244 1.3707 1.6254.7534 2.0272-.6173.402-2.2906-1.31-2.8984-.7106-.6078.5993.0095 2.276.0095 2.276" />
            </g>
          </svg>
        );
      case 'emoji_activity':
        return (
          <svg className={styles.svg} viewBox="2 2 19 21">
            <path
              className={styles.svgFill}
              transform="scale(0.98) translate(0 2)"
              fillRule="evenodd"
              d="M6.4635 9.296S7.495 7.8805 8.3795 7.21c.8842-.6706 1.437-1.2294 3.574-.6706.8473.149 2.358.6333 2.837 1.1922.479.5588 1.5106 2.2353 1.8054 2.8686.2946.6333 3.9054.596 3.9054.7824 0 .1862.2948.8196-.1474.8196-.442 0-3.795.2607-4.2002 0-.4053-.2608-.7738-2.049-1.3633-2.049-.5895 0-2.1002 2.7568-2.1002 2.7568l3.7214 3.4647L13.1325 22l-1.6212-.8196 3.0213-4.3588-3.0213-2.1608-2.7634 3.055L3 17.0078l.4053-1.7138 4.6057.4844S9.3374 12.5 9.8164 11.643c.479-.8567 2.0265-3.2783 2.0265-3.2783s-.1108-.6706-1.1793-.6706-2.5055.7453-3.0213 1.602h-1.179zm9.9113-2.4215c1.1396 0 2.0634-.8673 2.0634-1.9372 0-1.07-.9238-1.9373-2.0634-1.9373-1.1395 0-2.0633.8673-2.0633 1.9373s.9238 1.9372 2.0633 1.9372z"
            />
          </svg>
        );
      case 'emoji_travel':
        return (
          <svg className={styles.svg} viewBox="2 2 19 21">
            <g transform="translate(0 2)">
              <path className={styles.svgStroke} strokeWidth="1.8" d="M3.0375 20.1763V9.9307H7.241V2.607h7.2055v6.641-1.7078h6.6052v12.636" />
              <path className={styles.svgFill} d="M9.0047 4.4286h1.201V5.643h-1.201zm2.4018 0h1.201V5.643h-1.201zM9.0047 6.857h1.201v1.2144h-1.201zm2.4018 0h1.201v1.2144h-1.201zm-6.605 4.8573h1.201v1.2143h-1.201zm13.2102 0h1.201v1.2143h-1.201zm0-2.4286h1.201V10.5h-1.201zM6.0023 19h2.402v2.4286h-2.402V19zm9.6075 0h2.402v2.4286h-2.402V19zm-7.2056.607h7.2056V19H8.4042v.607zM5.4394 19h.638v-.607h-.638V19zm12.5723 0h.638v-.607h-.638V19zm-12.5723-.645v-2.884c0-.6086 1.7826-.683 1.7826-.683v-1.2143c0-.9093 1.3323-3.624 3.021-3.624h3.5654c1.6513 0 2.946 2.487 2.946 3.624v1.2142s1.8202-.114 1.8202.9484v2.6183H15.028v-.6072h-5.95v.607H5.4395zm3.226-3.907h6.6426s0-2.96-1.5763-2.96h-3.19c-1.9515 0-1.8764 2.96-1.8764 2.96zm-1.162 3.034c.3317 0 .6006-.2717.6006-.607s-.269-.607-.6005-.607c-.3316 0-.6005.2717-.6005.607s.269.607.6005.607zm9.007 0c.3317 0 .6006-.2717.6006-.607s-.269-.607-.6005-.607c-.3316 0-.6005.2717-.6005.607s.269.607.6005.607z" />
            </g>
          </svg>
        );
      case 'emoji_symbols':
        return (
          <svg className={styles.svg} viewBox="2 2 20 21">
            <g fillRule="evenodd" transform="translate(3 4)">
              <g className={styles.svgStroke}>
                <path strokeWidth="1.6" d="M.6378.8h7.168m-7.168 2h7.168" strokeLinecap="square" />
                <path strokeWidth="1.4" d="M4.222 3.49v3.8746" strokeLinecap="square" />
                <path strokeWidth="1.4" d="M13.7355 6.7924V.0374s2.2893.6456 2.702 2.2773c.413 1.6317-.4502 2.9978-.4502 2.9978" />
              </g>
              <ellipse
                className={styles.svgFill}
                cx="12.4796" cy="7.103"
                rx="2.1117" ry="1.5251"
                transform="rotate(-18 12.48 7.103)"
              />
              <path strokeWidth=".4" d="M3.3396 13.7573c-.0912-.1154-.1825-.2308-.2738-.346-.0912-.1155-.175-.2328-.251-.352-.076-.1192-.1388-.2403-.1882-.3633-.0495-.123-.0742-.246-.0742-.3692 0-.3.099-.521.2967-.6633.198-.1423.411-.2134.639-.2134.289 0 .518.087.685.26.168.173.251.379.251.617 0 .177-.034.337-.102.479-.068.142-.156.271-.262.387-.106.116-.224.22-.353.312s-.251.177-.365.254zm2.955 5.064H7.561l-1.586-1.857c.0837-.1847.156-.348.217-.4904.0606-.143.112-.287.154-.433.0416-.146.076-.306.1025-.479s.0513-.383.074-.629h-.924c-.0228.423-.1103.849-.2624 1.28l-1.471-1.811c.198-.116.388-.244.571-.387.183-.143.346-.302.491-.479.145-.177.259-.371.342-.583.084-.212.126-.441.126-.687 0-.277-.055-.521-.165-.733-.11-.212-.256-.389-.439-.531-.182-.143-.393-.248-.633-.317-.239-.07-.485-.104-.736-.104-.296 0-.559.046-.787.138-.228.092-.42.217-.576.375-.156.1572-.273.338-.353.542-.08.204-.119.417-.119.64 0 .2076.025.394.074.5595.05.1657.118.323.206.473.0874.15.1843.298.291.444.1063.1466.217.3.331.462-.259.138-.504.286-.736.444-.232.158-.4337.3343-.605.5304-.171.196-.308.4172-.411.6632s-.154.5304-.154.8534c0 .1695.0286.381.0857.6348.057.2538.177.5.3594.738.1826.2387.441.4425.776.6117.3345.169.7756.254 1.323.254.449 0 .884-.096 1.306-.288.422-.1923.755-.481.999-.8652l.867 1.027zM3.02 14.8417l1.871 2.2725c-.1977.3-.443.5385-.7358.7154-.293.1768-.6256.2653-.9983.2653-.198 0-.39-.035-.576-.104-.187-.07-.352-.164-.497-.283-.145-.119-.261-.266-.348-.439-.088-.174-.131-.364-.131-.571 0-.247.038-.46.114-.641.076-.181.179-.344.308-.49.129-.146.279-.277.451-.393.171-.115.351-.227.542-.335z" />
              <path strokeWidth=".6" d="M9.9136 12.354c0-.1767.0114-.3632.0342-.5593.0228-.196.0703-.377.1426-.5422.0722-.1654.173-.3038.3023-.4153.1293-.1115.3005-.1673.5134-.1673.221 0 .394.055.52.167.126.111.223.25.291.415.069.165.112.346.131.542.019.196.029.378.029.548 0 .177-.011.365-.034.565-.023.2-.07.382-.142.548-.072.165-.173.302-.302.409-.129.107-.304.161-.524.161-.213 0-.382-.056-.508-.167-.125-.112-.222-.25-.291-.416-.068-.165-.112-.346-.131-.542-.019-.196-.028-.379-.028-.548zm-.8557.0232c0 .3153.032.6114.097.8883.064.2768.169.519.313.7267s.334.371.57.4903c.235.1192.525.1788.867.1788.334 0 .616-.0654.844-.196.228-.131.416-.302.564-.5135.148-.2114.255-.4575.319-.7382.064-.2808.097-.571.097-.871 0-.3153-.029-.6133-.086-.894-.057-.2807-.156-.525-.297-.7325-.141-.207-.327-.373-.559-.496-.232-.123-.527-.184-.885-.184-.35 0-.643.064-.8788.191s-.426.298-.5705.514c-.144.216-.247.464-.308.744-.061.281-.091.579-.091.894zm5.891 4.2755c0-.177.011-.3634.034-.5595.023-.196.07-.3768.142-.542.072-.1655.173-.304.302-.4154.129-.1115.3-.1673.513-.1673.22 0 .393.0558.519.1673s.222.25.291.4153c.068.166.112.346.131.543.019.196.028.379.028.548 0 .177-.012.366-.034.565-.023.2-.071.383-.143.548-.072.166-.173.302-.303.41-.13.108-.305.162-.525.162-.213 0-.382-.056-.508-.167-.126-.111-.222-.249-.291-.415-.068-.165-.112-.346-.131-.542-.019-.196-.029-.379-.029-.548zm-.856.023c0 .3154.032.6115.097.8883.064.277.169.5172.313.721.144.2038.334.3653.57.4845.236.1192.525.1788.867.1788.334 0 .616-.0634.844-.1903.228-.127.416-.296.564-.5076.148-.2115.255-.4576.319-.7383.064-.28.097-.571.097-.87 0-.315-.029-.613-.086-.894-.057-.28-.156-.525-.297-.732-.141-.207-.328-.373-.56-.496-.232-.123-.527-.184-.8847-.184-.3496 0-.6425.064-.878.191-.2358.127-.426.298-.5705.514-.144.216-.247.464-.308.744-.061.281-.091.579-.091.894zm1.597-6.183l-6.138 8.571h.981l6.126-8.571h-.969z" />
            </g>
          </svg>
        );
        case 'emoji_flags':
        return (
          <svg className={styles.svg} viewBox="0 0 500 500">
            <g fillRule="evenodd" strokeWidth="10" transform="translate(0 10)">
              <path d="M447.422 164.952L58.445 28.5c-2.71-.95-5.71-.53-8.053 1.128-2.342 1.658-3.734 4.348-3.734 7.216v426.31c0 4.886 3.964 8.845 8.854 8.845 4.89 0 8.853-3.96 8.853-8.845V316.02l383.057-134.377c3.546-1.244 5.92-4.59 5.92-8.345 0-3.756-2.374-7.1-5.92-8.346zM64.365 297.27V49.324l353.4 123.973-353.4 123.973z" />
              <path
                style={{
                  transformOrigin: 'center',
                  transform: 'scale(0.8)'
                }}
                d="M303.11 164.95L103.52 94.937c-2.71-.95-5.71-.53-8.052 1.13-2.343 1.657-3.735 4.347-3.735 7.215v140.033c0 2.868 1.393 5.557 3.736 7.215 1.515 1.074 3.31 1.63 5.12 1.63.985 0 1.977-.166 2.932-.5L303.11 181.64c3.547-1.243 5.92-4.588 5.92-8.344 0-3.755-2.373-7.1-5.92-8.345zm-193.67 65.883v-115.07l164.013 57.534-164.012 57.536z"
              />
            </g>
          </svg>
        );
      default:
        return this.renderMaterialIcon();
    }
  }

  renderGlyph() {
    const { glyph } = this.props;

    switch (glyph) {
      case 'logo':
      case 'call':
      case 'call_end':
      case 'phone_outline':
      case 'apple':
      case 'more':
      case 'minimize':
      case 'link':
      case 'add_member':
      case 'more_outline':
      case 'arrow_up':
      case 'favourite':
      case 'windows':
      case 'tux':
      case 'plus_outline':
      case 'finder':
      case 'emoji_smile':
      case 'emoji_nature':
      case 'emoji_food':
      case 'emoji_party':
      case 'emoji_activity':
      case 'emoji_travel':
      case 'emoji_symbols':
      case 'emoji_flags':
        return this.renderSvgIcon();
      default:
        return this.renderMaterialIcon();
    }
  }

  render() {
    const { onClick, theme, inverted, size } = this.props;
    const className = classNames(styles.container, {
      [styles[theme]]: theme,
      [styles[size]]: size,
      [styles.inverted]: inverted,
      [styles.clickable]: onClick
    }, this.props.className);

    return (
      <div className={className} onClick={onClick}>
        {this.renderGlyph()}
      </div>
    );
  }
}

export default Icon;
