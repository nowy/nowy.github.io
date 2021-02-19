import { createNotesNetwork, NotesNetwork } from './notes-network';

export const createApp = async ({ notes }: { notes: NotesNetwork }) => {
  const container = document.getElementById('network')
  const appMain = document.querySelector('.app__main')
  const button = document.querySelector('.button')

  if (!button || !appMain || !container) return

  button.addEventListener('click', () => {
    if (appMain.classList.contains('app__main--notes')) {
      appMain.classList.remove('app__main--notes')
      return
    }
  
    appMain.classList.add('app__main--notes')
  })

  await createNotesNetwork({ notes, container })
}
