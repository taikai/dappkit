import {Errors} from '@interfaces/error-enum';
import {UseModel} from '@base/use-model';
import {PausableMethods} from '@methods/pausable';

export class Pausable extends UseModel<PausableMethods> {

  async paused() {
    return this.model.callTx(this.model.contract.methods.paused());
  }

  async whenNotPaused() {
    const paused = await this.paused();
    if (paused)
      throw new Error(Errors.ContractIsPaused);
  }

}
