/** Locate the executable in a prepared Electron distribution. */
import { join } from 'node:path'

const executables = {
  darwin: 'Electron.app/Contents/MacOS/Electron',
  win32: 'electron.exe',
  linux: 'electron',
}

/**
 * Locate Electron before electron-builder renames the executable.
 * @param directory Extracted distribution directory.
 * @param platform Target operating system.
 * @returns Absolute executable path when the distribution directory is absolute.
 */
export function electronExecutablePath(directory: string, platform: keyof typeof executables): string {
  return join(directory, executables[platform])
}
