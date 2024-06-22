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
} from '@my/ui'
import { ChevronDown, ChevronUp, X } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export function HomeScreen() {

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
                  width: 600,
                  height: 600,
                }}

              />
          <YStack ai="center" jc='center'>
            <YStack ai="center">
              <H1>Amsay</H1>
            </YStack>
            <H4>Yet another developer.</H4>
          </YStack>
        </XStack>
        <YStack padding="$4">
          <Paragraph>
            Hello World
          </Paragraph>
        </YStack>
      </YStack>

    </YStack>
  )
}


