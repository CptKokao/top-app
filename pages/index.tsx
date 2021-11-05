import { Button, Htag, Tag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag='h1'>Lorem, ipsum.</Htag>
      <Htag tag='h2'>Lorem, ipsum.</Htag>
      <Htag tag='h3'>Lorem, ipsum.</Htag>
      <P size="s">Lorem, ipsum.</P>
      <P size="m">Lorem, ipsum.</P>
      <P size="l">Lorem, ipsum.</P>
      <Tag size="s">Lorem, ipsum.</Tag>
      <Tag size="m">Lorem, ipsum.</Tag>
      <Tag color="ghost">Lorem, ipsum.</Tag>
      <Tag color="red">Lorem, ipsum.</Tag>
      <Tag color="grey">Lorem, ipsum.</Tag>
      <Tag color="green">Lorem, ipsum.</Tag>
      <Tag color="primary">Lorem, ipsum.</Tag>
      <Button appearance="ghost">Lorem, ipsum.</Button>
      <Button appearance="primary" arrow="right">Lorem, ipsum.</Button>
      <Button appearance="ghost" arrow="down">Lorem, ipsum.</Button>
    </div>
  );
}
