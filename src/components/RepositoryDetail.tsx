import React from 'react';
import Modal, { ModalSection } from "@kiwicom/orbit-components/lib/Modal";
import Text from "@kiwicom/orbit-components/lib/Text";

type Props = {
  onClose: () => void;
};

export const RepositoryDetail = ({ onClose }: Props) => {
    return (
      <Modal onClose={onClose}>
        <ModalSection>
          <Text>Pull request name</Text>
          <Text>Pull request name</Text>
        </ModalSection>
      </Modal>
    );
}
