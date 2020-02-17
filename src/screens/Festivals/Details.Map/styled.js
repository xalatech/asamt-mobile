import styled from 'styled-components';

export const Wrapper = styled.View`
  flex: 1;
  position: relative;
  background-color: ${({ theme }) => theme.white};
`;

export const HintText = styled.Text`
  color: white;
  font-size: 16px;
`;

export const Loader = styled.View`
  margin-top: 20px;
`;

export const HintButton = styled.TouchableOpacity`
  border-radius: 20px;
  background-color:rgba(95,200,215,0.6);
  width: 28px;
  height: 28px;
  bottom: 3px;
  left: -13px;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const HintWrapper = styled.View`
  justify-content: flex-end;
  align-items: center;
`;

export const HintButtonWrapper = styled.View`
`;

export const ModalWrapper = styled.View`
  width: 80%;
  height: 100px;
  background-color: white;
  margin: auto;
  z-index: 2;
  border-radius: 8px;
`;

export const StyledModal = styled.Modal`
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.View`
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const ModalText = styled.Text`
  text-align: center;
  font-size: 18px;
`;
