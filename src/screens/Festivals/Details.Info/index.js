import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-native';
import closeModal from '@images/closeModal.png';

import Button from '@components/core/Button';

import * as S from './styled';

const Info = props =>
  (
    <Modal
      transparent
      animationType="none"
      onRequestClose={() => { console.log('close modal'); }}
    >
      <S.ModalBackground>
        <S.Wrapper>
          <S.Header>
            <S.CloseModal onPress={props.onClose}>
              <S.CloseModalImage source={closeModal} />
            </S.CloseModal>
            <S.Title>Green side of the Moon</S.Title>
          </S.Header>
          <S.Body>
            <S.Info>
            A festival is an event ordinarily celebrated by a
            community and centering on some characteristic aspect
             of that community and its religion or cultures.
            It is often marked as a local or national holiday, mela, or eid.
            Next to religion and folklore, a significant origin is agricultural.
            Food is such a vital resource that many
            festivals are associated with harvest time. Religious commemoration and thanksgiving
            for good harvests are blended in events that take place in autumn, such as
            Halloween in the northern hemisphere and Easter in the southern.
            Festivals often serve to fulfill specific communal purposes,
            especially in regard to commemoration or thanksgiving.
            The celebrations offer a sense of belonging for religious, social,
            or geographical groups, contributing to group cohesiveness.
            They may also provide entertainment, which was particularly important to local
            communities before the advent of mass-produced
            </S.Info>
          </S.Body>
          <S.Footer>
            <Button title="Show location" onPress={props.onClose} />
          </S.Footer>
        </S.Wrapper>
      </S.ModalBackground>
    </Modal>
  );

Info.propTypes = {
  onClose: PropTypes.func.isRequired,
};


export default Info;
