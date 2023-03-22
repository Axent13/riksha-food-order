import React from 'react';
import PropTypes from 'prop-types';
import './image.scss';

import noPhotoImg from '../../../assets/no-photo.png';

import chetyreSyra from '../../../assets/productsImages/chetyre-sira.jpg';
import belaya from '../../../assets/productsImages/belaya.jpg';
import vetchinaIGribi from '../../../assets/productsImages/vetchina-i-gribi.jpg';
import kalyari from '../../../assets/productsImages/kalyari.jpg';
import kuricaRanch from '../../../assets/productsImages/kurica-ranch.jpg';
import margarita from '../../../assets/productsImages/margarita.jpg';
import masnyaya from '../../../assets/productsImages/masnyaya.jpg';
import peperoni from '../../../assets/productsImages/peperoni.jpg';
import sVetchinoy from '../../../assets/productsImages/s-vetchinoy.jpg';
import cezar from '../../../assets/productsImages/cezar.jpg';
import sushiGril from '../../../assets/productsImages/sushi-gril.jpg';
import sushiSpajsi from '../../../assets/productsImages/sushi-spajsi.jpg';
import sushiKrevetka from '../../../assets/productsImages/sushi-krevetka.jpg';
import sushiLosos from '../../../assets/productsImages/sushi-losos.jpg';
import sushiOkun from '../../../assets/productsImages/sushi-okun.jpg';
import sushiUgor from '../../../assets/productsImages/sushi-ugor.jpg';
import baldezh from '../../../assets/productsImages/baldezh.jpg';
import vostorg from '../../../assets/productsImages/vostorg.jpg';
import grin from '../../../assets/productsImages/grin.jpg';
import dzhek from '../../../assets/productsImages/dzhek.jpg';
import ideal from '../../../assets/productsImages/ideal.jpg';
import kurbekon from '../../../assets/productsImages/kurbekon.jpg';
import nezhnyj from '../../../assets/productsImages/nezhnyj.jpg';
import okunyao from '../../../assets/productsImages/okunyao.jpg';
import avokado from '../../../assets/productsImages/avokado.jpg';
import krevetka from '../../../assets/productsImages/krevetka.jpg';
import losos from '../../../assets/productsImages/losos.jpg';
import ogurec from '../../../assets/productsImages/ogurec.jpg';
import okun from '../../../assets/productsImages/okun.jpg';
import tunec from '../../../assets/productsImages/tunec.jpg';
import blaga from '../../../assets/productsImages/blaga.jpg';
import bonito from '../../../assets/productsImages/bonito.jpg';
import drakon from '../../../assets/productsImages/drakon.jpg';
import duo from '../../../assets/productsImages/duo.jpg';
import zharLosos from '../../../assets/productsImages/zhar-losos.jpg';
import kaliforniya from '../../../assets/productsImages/kaliforniya.jpg';
import kanada from '../../../assets/productsImages/kanada.jpg';
import krevetulya from '../../../assets/productsImages/krevetulya.jpg';
import kukura from '../../../assets/productsImages/kukura.jpg';
import lososyan from '../../../assets/productsImages/lososyan.jpg';
import mazhor from '../../../assets/productsImages/mazhor.jpg';
import mamenori from '../../../assets/productsImages/mamenori.jpg';
import ogurechnyj from '../../../assets/productsImages/ogurechnyj.jpg';
import tarTar from '../../../assets/productsImages/tar-tar.jpg';
import ukropchik from '../../../assets/productsImages/ukropchik.jpg';
import ulybkaLososya from '../../../assets/productsImages/ulybka-lososya.jpg';
import filadelfiyaLajt from '../../../assets/productsImages/filadelfiya-lajt.jpg';
import filadelfiyaLyuks from '../../../assets/productsImages/filadelfiya-lyuks.jpg';
import hrustik from '../../../assets/productsImages/hrustik.jpg';
import amerika from '../../../assets/productsImages/amerika.jpg';
import dabl from '../../../assets/productsImages/dabl.jpg';
import tempuraLosos from '../../../assets/productsImages/tempura-losos.jpg';
import tempuraMyasnoj from '../../../assets/productsImages/tempura-myasnoj.jpg';
import tempuraOkun from '../../../assets/productsImages/tempura-okun.jpg';
import sakura from '../../../assets/productsImages/sakura.jpg';
import tempuraSnezhnyjKrab from '../../../assets/productsImages/tempura-snezhnyj-krab.jpg';
import tempuraTunec from '../../../assets/productsImages/tempura-tunec.jpg';
import assortiSet from '../../../assets/productsImages/assorti-set.jpg';
import vkusnyjSet from '../../../assets/productsImages/vkusnyj-set.jpg';
import dlyaVasSet from '../../../assets/productsImages/dlya-vas-set.jpg';
import zapechennyjSet from '../../../assets/productsImages/zapechennyj-set.jpg';
import klassikaSet from '../../../assets/productsImages/klassika-set.jpg';
import lajtSet from '../../../assets/productsImages/lajt-set.jpg';
import lyuksSet from '../../../assets/productsImages/lyuks-set.jpg';
import ogonSet from '../../../assets/productsImages/ogon-set.jpg';
import otlichnyjSet from '../../../assets/productsImages/otlichnyj-set.jpg';
import rikshaSet from '../../../assets/productsImages/riksha-set.jpg';
import sushiSet from '../../../assets/productsImages/sushi-set.jpg';
import tempurnyjSet from '../../../assets/productsImages/tempurnyj-set.jpg';
import WOK from '../../../assets/productsImages/WOK.jpg';
import kola from '../../../assets/productsImages/kola.jpg';
import sok from '../../../assets/productsImages/sok.png';
import od from '../../../assets/productsImages/od.jpg';
import fri from '../../../assets/productsImages/fri.jpg';
import midiiZapechennyeSoSpajsi from '../../../assets/productsImages/midii-zapechennye-so-spajsi.jpg';
import sirPalochki from '../../../assets/productsImages/sir-palochki.jpg';
import chukaSalat from '../../../assets/productsImages/chuka-salat.jpg';
import yebiTempura from '../../../assets/productsImages/yebi-tempura.jpg';

const images = {
  'chetyre-sira': chetyreSyra,
  belaya,
  'vetchina-i-gribi': vetchinaIGribi,
  kalyari,
  'kurica-ranch': kuricaRanch,
  margarita,
  masnyaya,
  peperoni,
  's-vetchinoy': sVetchinoy,
  cezar,
  'sushi-gril': sushiGril,
  'sushi-spajsi': sushiSpajsi,
  'sushi-krevetka': sushiKrevetka,
  'sushi-losos': sushiLosos,
  'sushi-okun': sushiOkun,
  'sushi-ugor': sushiUgor,
  baldezh,
  vostorg,
  grin,
  dzhek,
  ideal,
  kurbekon,
  nezhnyj,
  okunyao,
  avokado,
  krevetka,
  losos,
  ogurec,
  okun,
  'snezhnyj-krab': kaliforniya,
  tunec,
  blaga,
  bonito,
  drakon,
  duo,
  'zhar-losos': zharLosos,
  kaliforniya,
  kanada,
  krevetulya,
  kukura,
  lososyan,
  mazhor,
  mamenori,
  ogurechnyj,
  'tar-tar': tarTar,
  ukropchik,
  'ulybka-lososya': ulybkaLososya,
  'filadelfiya-lajt': filadelfiyaLajt,
  'filadelfiya-lyuks': filadelfiyaLyuks,
  hrustik,
  amerika,
  dabl,
  'tempura-losos': tempuraLosos,
  'tempura-myasnoj': tempuraMyasnoj,
  'tempura-okun': tempuraOkun,
  sakura,
  'tempura-snezhnyj-krab': tempuraSnezhnyjKrab,
  'tempura-tunec': tempuraTunec,
  'assorti-set': assortiSet,
  'vkusnyj-set': vkusnyjSet,
  'dlya-vas-set': dlyaVasSet,
  'zapechennyj-set': zapechennyjSet,
  'klassika-set': klassikaSet,
  'lajt-set': lajtSet,
  'lyuks-set': lyuksSet,
  'ogon-set': ogonSet,
  'otlichnyj-set': otlichnyjSet,
  'riksha-set': rikshaSet,
  'sushi-set': sushiSet,
  'tempurnyj-set': tempurnyjSet,
  WOK,
  kola,
  sok,
  od,
  fri,
  'midii-zapechennye-so-spajsi': midiiZapechennyeSoSpajsi,
  'sir-palochki': sirPalochki,
  'chuka-salat': chukaSalat,
  'yebi-tempura': yebiTempura,
};

const Image = ({ image }) => {
  console.log(image);
  console.log(images[image]);
  return (
    <img
      className='image'
      src={images[image] || noPhotoImg}
      alt={image ? '' : 'No photo'}
    />
  );
};

Image.propTypes = {
  image: PropTypes.string,
};

export default Image;
