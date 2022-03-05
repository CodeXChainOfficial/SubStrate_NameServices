import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Identicon from '@polkadot/react-identicon';
import { stringShorten } from '@polkadot/util';

const namePaddingLen = 10;
const addressPaddingLen = 5;

interface AccountItemProps {
  accountAddress: string;
  accountName?: string;
  balanceStr?: string;
}
const AccountItem = ({
  accountAddress,
  accountName,
  balanceStr,
}: AccountItemProps) => {
  const nameStr = accountName && stringShorten(accountName, namePaddingLen);
  const addressStr =
    accountAddress && stringShorten(accountAddress, addressPaddingLen);

  return (
    <div className="d-flex align-items-center">
      <div className="me-2">
        <Identicon value={accountAddress} size={40} theme="polkadot" />
      </div>
      <div>
        <Row className="flex-column flex-sm-row">
          <Col>
            {nameStr && <div className="text-left">{nameStr}</div>}
            <div className="text-left">{addressStr}</div>
          </Col>
          {balanceStr && (
            <Col>
              <div className="text-left text-md-right">{`${balanceStr}`}</div>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default AccountItem;
