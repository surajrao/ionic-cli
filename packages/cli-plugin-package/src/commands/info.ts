import {
  CommandLineInputs,
  CommandLineOptions,
  Command,
  CommandMetadata
} from '@ionic/cli-utils';

/**
 * Metadata about the docs command
 */
@CommandMetadata({
  name: 'info',
  description: 'Opens up the documentation for Ionic',
})
export class InfoCommand extends Command {
  async run(inputs: CommandLineInputs, options: CommandLineOptions): Promise<void> {

  }
}