import { useState } from 'react'
import { Button, useIsomorphicLayoutEffect } from 'tamagui'
import { useThemeSetting, useRootTheme } from '@tamagui/next-theme'
import {Sun, SunMoon, Moon} from '@tamagui/lucide-icons'


export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting()
  const [theme] = useRootTheme()

  const [clientTheme, setClientTheme] = useState<string | undefined>('system')

  let clientIcon = []

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme)
  }, [themeSetting.current, themeSetting.resolvedTheme])

  if (clientTheme === 'light'){
      clientIcon = []
      clientIcon.push(
        <Sun/>
      )
  } else if (clientTheme === 'system'){
    clientIcon = []
    clientIcon.push(
      <SunMoon/>
    )
  } else if (clientTheme === 'dark'){
    clientIcon = []
    clientIcon.push(
      <Moon/>
    )
  }

  return <Button onPress={themeSetting.toggle}>{clientIcon}</Button>
}
