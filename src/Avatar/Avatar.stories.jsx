import { Avatar } from './Avatar';

export default {
  title: 'Design System/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      subtitle: 'Displays an image that represnts a user or organization!',
    },
  },
};

export const Controls = {
  args: {
    loading: false,
    size: 'medium',
    username: 'Tom Cruise'
  }
}

export const Standard = {
  args: {
    size: 'large',
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
};

/**
 * 4 sizes are supported!
 */
export const Sizes = {
  args: {
    username: 'Tom Coleman',
    src: 'https://avatars2.githubusercontent.com/u/132554',
  },
  render: (args) => (
    <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
  ),
};

/**
 * Shows the user's initials as fallback when no image is provided!
 */
export const Initials = {
  render: (args) => (
    <>
      <Avatar username='Tom Coleman' />
      <Avatar username='Dominic Nguyen' />
      <Avatar username='Varun Vachhar' />
      <Avatar username='Michael Shilman' />
    </>
  ),
};
/**
 * Shows a loading indicator!
 */
export const Loading = {
  args: {
    loading: true,
  },
  render: (args) => (
    <>
      <Avatar {...args} size='large' />
      <Avatar {...args} size='medium' />
      <Avatar {...args} size='small' />
      <Avatar {...args} size='tiny' />
    </>
  ),
};

export const Large = {
  render: () => (
    <>
      <Avatar loading size='large' />
      <Avatar size='large' username='Tom Coleman' />
      <Avatar
        size='large'
        username='Tom Coleman'
        src='https://avatars2.githubusercontent.com/u/132554'
      />
    </>
  ),
};
