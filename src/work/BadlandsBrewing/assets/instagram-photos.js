import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { InstagramWrap } from '../styled';

const InstagramPhotos = () => (
  <InstagramWrap>
    <InstagramEmbed
      url='https://www.instagram.com/p/BedKYX5nFla/?taken-by=badlandsbrewing'
      maxWidth={375}
      hideCaption={true}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
    <InstagramEmbed
      url='https://www.instagram.com/p/BbCJF1xnFmV/?taken-by=badlandsbrewing'
      maxWidth={375}
      hideCaption={true}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
    />
  </InstagramWrap>
);

export default InstagramPhotos;
