import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
  Image,
  H3,
  H4,
  H2,
  Text,
} from '@my/ui'
import { AppWindow, ExternalLink } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { Link } from 'solito/link'
import { useLink } from 'solito/navigation'

export function HomeScreen() {
  const newLine = ['\n \n']


  const myProjects = [
    ['Cover Image','Name', 'Type', 'Short Description', 'https://www.google.com'],
    ['Cover Image','Name', 'Type', 'Short Description', 'https://www.google.com'],
    ['Cover Image','Name', 'Type', 'Short Description', 'https://www.google.com'],
  ]
  const projects = []
  const projectType = []
  for (let i = 0; i < myProjects.length; i++){
    if (myProjects[i][2] === 'Type'){
      projectType.push(
        <AppWindow/>
      )
    }
    projects.push(
      <YStack padding='$4'>
      <XStack borderWidth="$1" borderRadius={4}>
        <Image
                source={{
                  uri: 'https://picsum.photos/600/600',
                  width: 100,
                  height: 100,
                }}/>
      <YStack>
        <XStack jc='space-between'>
          <H4>{myProjects[i][1]}</H4>
          {projectType[i]}
        </XStack>
        <Text>{myProjects[i][3]}</Text>
        <Link jc='right' href={myProjects[i][4]}> <ExternalLink/> </Link>
      </YStack>
      </XStack>
      </YStack>
    )
  }

  return (
    <YStack>
      <XStack
        w="100%"
        t="$2"
        gap="$6"
        jc="right"
        paddingRight="$2"
      >
        {Platform.OS === 'web' && (
          <>
            <SwitchThemeButton />
          </>
        )}
      
      </XStack>
      <YStack gap="$4">
        <XStack jc="space-evenly">
          <Image
                source={{
                  uri: 'https://picsum.photos/600/600',
                  width: 400,
                  height: 400,
                }}

              />
          <YStack ai="center" jc="center">
            <YStack ai="center">
              <H1 >Amsay</H1>
            </YStack>
            <H4>Yet another developer.</H4>
          </YStack>
        </XStack>
        <YStack padding="$4">
          <H2>About Me</H2>
          <Text paddingLeft="$6">
            I'm Sam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga praesentium ut debitis qui tenetur labore accusantium doloribus assumenda rerum nemo culpa ratione libero sapiente, quo laboriosam quaerat molestias tempore!
            Similique quo, hic illo nobis, quod unde illum aut molestiae velit nesciunt quibusdam suscipit ut tempora quasi dolor fuga perferendis ab optio, odio laboriosam dolorum totam a? Quibusdam, perspiciatis nam?
            Architecto recusandae sequi ipsam laboriosam blanditiis, magnam totam odio facere eum harum labore aliquam, officiis delectus? Aliquam reprehenderit, id, deserunt voluptates, quidem eius veritatis enim quia dolorum cum accusantium doloremque?
            Asperiores voluptatum laborum saepe nesciunt, corrupti ut et distinctio ratione! {newLine}
          </Text>
          <Text paddingLeft="$6">
            Perferendis id ab ex, natus voluptate tempora quas sint repudiandae dolores voluptatibus. Fuga, nobis? Ratione quae tempore quis minus quo. Aliquam recusandae assumenda, omnis esse fuga temporibus quas voluptatibus iste ipsum, ratione quaerat voluptates repellendus corporis vitae asperiores possimus. Consequuntur repudiandae, nam aut odit officia consequatur quidem quae. Quasi, repudiandae.
            Voluptatibus vitae harum voluptas eveniet velit dicta non doloremque vel inventore, nulla omnis placeat, animi at quos repellat dolore voluptatem facilis blanditiis maiores sequi. Voluptatibus quasi atque perferendis expedita nam.
            Exercitationem repudiandae quam officia, est quia voluptatibus nihil rerum dolorum quibusdam illum reprehenderit at, perferendis voluptates sed quae corrupti aliquid et dignissimos error doloribus impedit sit praesentium hic. Totam, obcaecati?
            Et dolorum exercitationem maxime ratione rem, dolor nihil harum! Voluptatibus, id provident. Quidem fugit veritatis ut dolores facilis obcaecati aliquid alias quo explicabo. {newLine}
          </Text>
          <Text paddingLeft="$6">
          Eius aspernatur tempore atque, ex suscipit dicta.
            Rerum minus dolore voluptatum laboriosam omnis culpa itaque ducimus nulla temporibus soluta laborum, ullam voluptatem eveniet? Quia repellat sit rem dolorem, sed voluptas porro quibusdam vitae consequuntur amet itaque sunt.
            A natus maiores vero provident aperiam veritatis distinctio reprehenderit dignissimos architecto odit, tempore voluptatum eos quidem optio cum, quam iste deserunt dolor laudantium mollitia ab voluptate animi laborum numquam. Sapiente. {newLine}
          </Text>
        </YStack>

        <YStack padding="$4">
          <H2>Projects</H2>
          <XStack>
                {projects}
          </XStack>
        </YStack>
      </YStack>

    </YStack>
  )
}


