import { useState } from 'react'
import { Button, useIsomorphicLayoutEffect } from 'tamagui'
import { useThemeSetting, useRootTheme } from '@tamagui/next-theme'
import { Sun } from ''

export const SwitchThemeButton = () => {
  const themeSetting = useThemeSetting()
  const [theme] = useRootTheme()

  const [clientTheme, setClientTheme] = useState<string | undefined>('light')

  let clientIcon = []

  useIsomorphicLayoutEffect(() => {
    setClientTheme(themeSetting.forcedTheme || themeSetting.current || theme)
  }, [themeSetting.current, themeSetting.resolvedTheme])

  if (clientTheme === 'light'){
      clientIcon = []
      clientIcon.push(
        <Sun/>
      )
  }

  return <Button onPress={themeSetting.toggle}>Change theme: {clientTheme}</Button>
}
