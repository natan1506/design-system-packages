import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@natansouza-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nostrum temporibus earum aperiam praesentium explicabo nam modi animi quis saepe cum placeat. Natus pariatur illum iusto soluta accusantium! Tenetur, laborum!"
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
}

